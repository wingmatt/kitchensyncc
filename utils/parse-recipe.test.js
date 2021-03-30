import parseRecipe, { getRecipeDataFromSchemaJson } from "./parse-recipe";
import "@testing-library/jest-dom/extend-expect";

test("Schema Parsing returns an array of Ingredient Objects", async () => {
  const testJson = require("../allrecipesSchema.json");
  const parsedJson = getRecipeDataFromSchemaJson(testJson);
  expect(parsedJson).toEqual(
    expect.arrayContaining([expect.objectContaining({ ingredient: "eggs" })])
  );
});
test("parseRecipe returns an array of Ingredient Objects when supplied with HTML + JSON LD", async () => {
  // setup test data to match test case
  const testData = "TODO";
  expect(parseRecipe(testData)).toEqual(
    expect.arrayContaining([expect.objectContaining({ ingredient: "eggs" })])
  );
});
test("parseRecipe returns an array of Ingredient Objects when supplied with marked-up HTML", async () => {
  // setup test data to match test case
  const testData = "TODO";
  expect(parseRecipe(testData)).toEqual(
    expect.arrayContaining([expect.objectContaining({ ingredient: "eggs" })])
  );
});
