
import cheerio from "cheerio"
import { parse } from 'recipe-ingredient-parser-v2';
import { Recipe, Ingredient } from "../types"

function parseHtml (html: string) {
  return cheerio.load(html)
}

function getRecipeDataFromSchemaJson(json: JSON): Ingredient[] {
  // Find the Ingredients array in the JSON
  const recipeSchema = json.data.find(schemaType => schemaType["@type"] == "Recipe" )
  const schemaIngredients = recipeSchema.recipeIngredient
  
  
  // Parse the ingredients into the Ingredient format before returning
  const parsedIngredients = schemaIngredients.map(ingredient => {
    return parse(ingredient)
  })
  return parsedIngredients
}
function getRecipeDataFromHtml(html: string): Ingredient[] {
  const recipeHtml = parseHtml(html)
  const ingredients = []
  recipeHtml('script[type="application/ld+json]')
  recipeHtml('*[itemprop="recipeIngredient"], *[itemprop="ingredients"]').each((i, element) => {
    let ingredientText = recipeHtml(element).text()
    let parsedIngredient = parse(ingredientText)
    ingredients.push(parsedIngredient)
  })
  return ingredients;
}

export { getRecipeDataFromSchemaJson, getRecipeDataFromHtml }