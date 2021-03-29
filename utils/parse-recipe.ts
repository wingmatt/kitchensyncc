
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

// Here it is. The big one that ties it all together!
// Are you ready for a function that takes an HTML string and plops out an array of Ingredients?
function parseRecipe (html: string): Ingredient[] {
// To do this magnificent feat, it will need to check for a JSON LD Recipe schema that includes a recipeIngredient array.
// If it finds one, it will take that array and parse it into our Ingredient format.
// If it doesn't find one, it will go through the more tedious process of building the array from DOM elements.
// If it can't build the array, it will return an error.
}

export { getRecipeDataFromSchemaJson, getRecipeDataFromHtml }

export default parseRecipe