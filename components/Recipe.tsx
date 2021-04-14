import { Recipe as RecipeInterface } from "../types";
import IngredientList from "./IngredientList";

export default function Recipe(props: RecipeInterface) {
  return (
    <article className="recipe">
      <img src="https://via.placeholder.com/300x200" alt={props.name}></img>
      <h2>
        <button aria-expanded="false">{props.name}</button>
        <svg viewBox="0 0 10 10" focusable="false">
          <rect className="vert" height="8" width="2" y="1" x="4"/>
          <rect height="2" width="8" y="4" x="1" />
        </svg>
      </h2>
      <div hidden>
        <a href={props.url}>Go to Recipe</a>
        <IngredientList title="Ingredients" ingredients={props.ingredients} />
      </div>
    </article>
  );
}
