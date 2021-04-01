import cheerio from "cheerio";
import { parse } from "recipe-ingredient-parser-v2";
import { Ingredient } from "../types";

function parseHtml(html: string) {
  return cheerio.load(html, { xmlMode: false });
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
  const htmlParser = parseHtml(html);

  // To do this magnificent feat, it will need to check for a JSON LD Recipe schema that includes a recipeIngredient array.
  const schemaJson: JSON[] = JSON.parse(
    htmlParser('script[type="application/ld+json"]').html()
  );
// TODO: Handle when there are multiple LD+JSON scripts, such as https://www.seriouseats.com/recipes/2021/03/pasta-alla-norcina-creamy-pasta-with-sausage.html
// TODO MAYBE: Make sure there is a Recipe Schema Object if we are going to go down the road of JSON parsing

  // If it finds one, it will take that array and parse it into our Ingredient format.
  if (schemaJson) {
    return getRecipeDataFromSchemaJson(schemaJson);
  }
  // If it doesn't find one, it will go through the more tedious process of building the array from DOM elements.
  else {
    return getRecipeDataFromHtml(html);
    // TODO: If it can't build the array, it will return an error.
  }
}

export { getRecipeDataFromSchemaJson, getRecipeDataFromHtml };

export default parseRecipe;
