import axios from "axios";

const GetRecipe = () => {
  const getRecipe = event => {
    event.preventDefault();
    axios
      .get(event.target.url.value)
      .then((response) => {
        console.log(response.data);
      })
      .catch(() => "Unable to fetch recipe.")
      .then(() => {});
  };
  return (
  <form onSumbit={getRecipe}>
    <label for="url">Recipe URL</label>
    <input type="text" id="url" name="url" />
  </form>
  )
  
}
 
export default GetRecipe