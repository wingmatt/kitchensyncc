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

function parseRecipeHtml(document: HTMLElement): Ingredient[] {
  return Array.from(
    document.querySelectorAll(
      '*[itemprop="recipeIngredient"], *[itemprop="ingredients"]'
    )
  )
    .map((script) => parse(script.textContent))
}

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
  } else {
    return parseRecipeHtml(document);
  }
}

export { getRecipeDataFromSchemaJson };

export default parseRecipe;
