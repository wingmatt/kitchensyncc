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

async function handler(req, res) {
  // Run the middleware

  // Rest of the API logic
  const recipeUrl = req.body.url;
  return await fetch(recipeUrl).then((response) =>
    response.text().then((responseHtml) => {
      console.log(responseHtml);
      return responseHtml;
    })
  );
}

export default handler;
