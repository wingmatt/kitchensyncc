import {Recipe as RecipeInterface} from '../types'
import IngredientList from './IngredientList'

export default function Recipe (props: RecipeInterface) {
  return (
    <article className="recipe">
      <img src="https://via.placeholder.com/300x200" alt={props.name}></img>
      <h2><button aria-expanded="false">{props.name}</button></h2>
      <div hidden>
        <a href={props.url}>Go to Recipe</a>
        <IngredientList
            title="Ingredients"
            ingredients={props.ingredients}
          />
      </div>
    </article>
  )
}