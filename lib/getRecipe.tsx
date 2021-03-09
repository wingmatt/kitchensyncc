import axios from "axios";

const getRecipe = (url) => {
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
    })
    .catch(() => "Unable to fetch recipe.")
    .then(() => {});
};

export default getRecipe;
