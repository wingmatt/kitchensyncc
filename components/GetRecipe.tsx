import {useState} from 'react'
import {Recipe} from '../types'

const GetRecipe = () => {
  
  const [recipe, setRecipe] = useState<Recipe>({
    url: "https://wingcuisine.com/recipes/recipe/smoked-gouda-fusilli-ham/"
  });

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
      response.json().then(recipeJson => {
        console.log(recipeJson)
        setRecipe({...recipe, ingredients: recipeJson})
      })
    })
  };
  
  return (
  <form onSubmit={getRecipe} data-testid="recipe-search">
    <label htmlFor="url">Recipe URL</label>
    {
    // TODO add change handler to make this mutable
    }
    <input type="text" id="url" name="url" defaultValue={recipe.url} onChange={event => setRecipe({...recipe, url: event.target.value})} />
    <button type="submit">Clip Recipe</button>
  </form>
  )
  
}
 
export default GetRecipe