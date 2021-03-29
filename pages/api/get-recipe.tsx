import Cors from "cors";
import { getRecipeDataFromHtml } from '../../utils/parse-recipe'


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


async function handler(req, res) {
  const testJson = require("../../allrecipesSchema.json")
  
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
