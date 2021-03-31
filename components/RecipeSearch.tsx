import {useState} from 'react'
import {Recipe} from '../types'

const RecipeSearch = () => {
  
  const [recipe, setRecipe] = useState<Recipe>({
    url: "https://www.allrecipes.com/recipe/22180/waffles-i/",
    ingredients: ['waffles']
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
        setRecipe({...recipe, ingredients: recipeJson})
      })
    })
  };
  
  return (
    <figure>
      <form onSubmit={getRecipe} data-testid="recipe-search">
        <label htmlFor="url">Recipe URL</label>
        <input type="text" id="url" name="url" defaultValue={recipe.url} onChange={event => setRecipe({...recipe, url: event.target.value})} />
        <button type="submit">Clip Recipe</button>
      </form>
      <ul>
        {recipe.ingredients.map((value, index) => {
          return <li key={index}>{value.ingredient}</li>
        })}
      </ul>
    </figure>
  )
  
}
 
export default RecipeSearch