
import cheerio from "cheerio"
import { parse } from 'recipe-ingredient-parser-v2';
import { Ingredient } from "../types"

function getRecipeDataFromSchemaJson(json: JSON): Ingredient[] {
  // Find the Ingredients array in the JSON
  const recipeSchema = json.data.find(schemaType => schemaType["@type"] == "Recipe" )
  const schemaIngredients = recipeSchema.recipeIngredient
  const parsedIngredients = schemaIngredients.map(ingredient => {
    return parse(ingredient)
  })
  
  // Parse the ingredients into the Ingredient format before returning
  return parsedIngredients
}
function getRecipeDataFromHtml(html: string): Ingredient[] {
  const recipeHtml = cheerio.load(html)
  const ingredients = []
  recipeHtml('*[itemprop="recipeIngredient"], *[itemprop="ingredients"]').each((i, element) => {
    let ingredientText = recipeHtml(element).text()
    let parsedIngredient = parse(ingredientText)
    ingredients.push(parsedIngredient)
  })
  return ingredients;
}

export { getRecipeDataFromSchemaJson, getRecipeDataFromHtml }