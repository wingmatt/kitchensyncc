import { parse as parseHtml } from "node-html-parser";
import { parse as parseIngredient } from "recipe-ingredient-parser-v2";
import { Ingredient } from "../types";

function htmlStringtoDom(html: string): any {
  return parseHtml(html);
}

function parseRecipeJson(document: HTMLElement): Ingredient[] | null {
  const jsonRecipe = Array.from(
    document.querySelectorAll('script[type="application/ld+json"]')
  ) // Get all LD JSON script tags
    .map((script) => JSON.parse(script.innerHTML)) // For each tag, grab the actual JSON within
    .flat() // Flatten the result — sometimes a script contains an array of objects instead of an object
    .find((schema) => schema["@type"] == "Recipe"); // Grab the Recipe schema out of all the collected JSON
  if (jsonRecipe) {
    return jsonRecipe.recipeIngredient.map((ingredient) => parseIngredient(ingredient));
  } else return null;
}

function parseRecipeHtml(document: HTMLElement): Ingredient[] {
  return Array.from(
    document.querySelectorAll(
      '*[itemprop="recipeIngredient"], *[itemprop="ingredients"]'
    )
  ).map((script) => parseIngredient(script.textContent));
}

function parseRecipe(html: string): Ingredient[] {
  const document = htmlStringtoDom(html);
  const recipeJson = parseRecipeJson(document);
  if (recipeJson) {
    return recipeJson;
  } else {
    return parseRecipeHtml(document);
  }
}

export default parseRecipe;
