
import  parseRecipe, { getRecipeDataFromSchemaJson } from "./parse-recipe";
import "@testing-library/jest-dom/extend-expect";
import { Ingredient } from '../types'

test("Schema Parsing returns an array of Ingredient Objects", async () => {
  const testJson = require("../allrecipesSchema.json");
  const parsedJson = getRecipeDataFromSchemaJson(testJson);
  expect(parsedJson).toEqual(expect.arrayContaining([expect.objectContaining({ingredient: 'eggs'})]));
});