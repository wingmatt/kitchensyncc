const GetRecipe = () => {
  
  const getRecipe = async event => {
    event.preventDefault();
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({
        url: event.target.url.value
      })
    }
    const recipeData = await fetch('/api/get-recipe/', fetchOptions).then(response => {
      console.log(response)
    })
  };
  
  return (
  <form onSubmit={getRecipe}>
    <label htmlFor="url">Recipe URL</label>
    <input type="text" id="url" name="url" defaultValue="https://wingcuisine.com/recipes/recipe/smoked-gouda-fusilli-ham/"/>
  </form>
  )
  
}
 
export default GetRecipe