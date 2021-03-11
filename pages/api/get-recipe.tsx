import Cors from "cors";

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

const getRecipeDataFromHtml: (html: string) => string[] =
function (html: string) : string[] {
  // Grab all of the elements with an itemprop="recipeIngredient"
  // Find the Schema JSON (if it exists) and grab its recipeIngredient array

  // Return an array of ingredients from the recipe
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // API Logic
  const recipeUrl = req.body.url;
  return await fetch(recipeUrl).then((response) =>
    response.text().then((responseHtml) => {
      console.log(responseHtml);
      // Turn the HTML object into a JSON object with the data we want
      const recipeData = getRecipeDataFromHtml(responseHtml)
      res.status(200).json(recipeData)
    })
  );
}

export default handler;
