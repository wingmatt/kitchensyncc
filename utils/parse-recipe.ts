
import cheerio from "cheerio"
import { parse } from 'recipe-ingredient-parser-v2';
import { Recipe, Ingredient } from "../types"

function parseHtml (html: string) {
  return cheerio.load(html)
}

function getRecipeDataFromSchemaJson(json: JSON): Ingredient[] {
  const recipeIngredient = json.data.find(schemaType => schemaType["@type"] == "Recipe" ).recipeIngredient  
  return recipeIngredient.map(ingredient => parse(ingredient))
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