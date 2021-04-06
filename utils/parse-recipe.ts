import { parse as htmlParser } from "node-html-parser";
import { parse } from "recipe-ingredient-parser-v2";
import { Ingredient } from "../types";

interface ParsedHtml {
  jsonSchema: any[];
}

function parseHtml(html: string): any {
  return htmlParser(html);
}

function getRecipeDataFromSchemaJson(json: any): Ingredient[] {
  const recipeIngredient = json.recipeIngredient;
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
  if (jsonRecipe) {
    // Right now schemaJson will work for allrecipes, and schemaJsonArray will work for some SeriousEats
    return getRecipeDataFromSchemaJson(jsonRecipe);
  }
  else {
    const htmlRecipe = document
      .querySelectorAll(
        '*[itemprop="recipeIngredient"], *[itemprop="ingredients"]'
      )
      .map((script) => script.rawText)
      .flat();
      console.log(htmlRecipe);
    return getRecipeDataFromHtml(html);
  }
}

export { getRecipeDataFromSchemaJson, getRecipeDataFromHtml };

export default parseRecipe;
