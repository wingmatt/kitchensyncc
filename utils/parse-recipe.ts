import { parse as htmlParser } from "node-html-parser";
import { parse } from "recipe-ingredient-parser-v2";
import { Ingredient } from "../types";

function parseHtml(html: string): any {
  return htmlParser(html);
}

function parseRecipeJson(document: HTMLElement): Ingredient[] | null {
  const jsonRecipe = Array.from(
    document.querySelectorAll('script[type="application/ld+json"]')
  )
    .map((script) => JSON.parse(script.innerHTML))
    .flat()
    .find((schema) => schema["@type"] == "Recipe");
  if (jsonRecipe) {
    return jsonRecipe.recipeIngredient.map((ingredient) => parse(ingredient));
  } else return null;
}

function parseRecipeHtml(document: HTMLElement): Ingredient[] {
  return Array.from(
    document.querySelectorAll(
      '*[itemprop="recipeIngredient"], *[itemprop="ingredients"]'
    )
  ).map((script) => parse(script.textContent));
}

function parseRecipe(html: string): Ingredient[] {
  const document = parseHtml(html);
  const recipeJson = parseRecipeJson(document);
  if (recipeJson) {
    return recipeJson;
  } else {
    return parseRecipeHtml(document);
  }
}

export default parseRecipe;
