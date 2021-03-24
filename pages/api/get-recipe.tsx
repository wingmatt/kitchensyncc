import Cors from "cors";
import cheerio from "cheerio"
import { parse } from 'recipe-ingredient-parser-v2';

const cors = Cors({
  methods: ["GET", "HEAD"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

function getRecipeDataFromHtml(html: string): string[] {
  const recipeHtml = cheerio.load(html)
  const ingredients = []
  recipeHtml('*[itemprop="recipeIngredient"], *[itemprop="ingredients"]').each((i, element) => {
    let ingredientText = recipeHtml(element).text()
    let parsedIngredient = parse(ingredientText)
    ingredients.push(parsedIngredient)
  })
  return ingredients;
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // API Logic
  const recipeUrl = req.body.url;
  return await fetch(recipeUrl).then((response) =>
    response.text().then((responseHtml) => {
      // Turn the HTML object into a JSON object with the data we want
      const recipeData = getRecipeDataFromHtml(responseHtml);
      res.status(200).json(recipeData);
    })
  );
}

export default handler;
