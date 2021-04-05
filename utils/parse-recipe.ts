import { parse as htmlParser } from "node-html-parser";
import { parse } from "recipe-ingredient-parser-v2";
import { Ingredient } from "../types";

interface ParsedHtml {
  jsonSchema: any[];
}

function parseHtml(html: string): any {
  return htmlParser(html);
}

function getRecipeDataFromSchemaJson(json: any[]): Ingredient[] {
  const recipeIngredient = json.find(
    (schemaType) => schemaType["@type"] == "Recipe"
  ).recipeIngredient;
  return recipeIngredient.map((ingredient) => parse(ingredient));
}
function getRecipeDataFromHtml(html: string): Ingredient[] {
  const recipeHtml = parseHtml(html);
  const ingredients = [];
  recipeHtml('*[itemprop="recipeIngredient"], *[itemprop="ingredients"]').each(
    (i, element) => {
      let ingredientText = recipeHtml(element).text();
      let parsedIngredient = parse(ingredientText);
      ingredients.push(parsedIngredient);
    }
  );
  return ingredients;
}

// Here it is. The big one that ties it all together!
// Are you ready for a function that takes an HTML string and plops out an array of Ingredients?
function parseRecipe(html: string): Ingredient[] {
  const document = parseHtml(html);
  const jsonScripts = document
    .querySelectorAll('script[type="application/ld+json"]')
    .map((script) => JSON.parse(script.rawText))
    .flat();
  const jsonRecipe = jsonScripts.find(
    (schemaType) => schemaType["@type"] == "Recipe"
  );
  console.log("Da HTML: " + jsonScripts);

  // TODO: Handle newline characters within stringified JSON properties, e.g. https://www.seriouseats.com/recipes/2021/03/pasta-alla-norcina-creamy-pasta-with-sausage.html
  // TODO MAYBE: Make sure there is a Recipe Schema Object if we are going to go down the road of JSON parsing

  // If it finds one, it will take that array and parse it into our Ingredient format.
  if (jsonRecipe) {
    // Right now schemaJson will work for allrecipes, and schemaJsonArray will work for some SeriousEats
    return getRecipeDataFromSchemaJson(jsonScripts);
  }
  // If it doesn't find one, it will go through the more tedious process of building the array from DOM elements.
  else {
    return getRecipeDataFromHtml(html);
    // TODO: If it can't build the array, it will return an error.
  }
}

export { getRecipeDataFromSchemaJson, getRecipeDataFromHtml };

export default parseRecipe;
