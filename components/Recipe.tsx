import { Recipe as RecipeInterface } from "../types";
import IngredientList from "./IngredientList";
import CollapsiblePanel from "./CollapsiblePanel"

export default function Recipe(props: RecipeInterface) {
  
  return (
    <article className="recipe">
      <img src="https://via.placeholder.com/300x200" alt={props.name}></img>
      <CollapsiblePanel title={props.name}>
        <a href={props.url} className="button">Go to Recipe</a>
        <IngredientList title="Ingredients" ingredients={props.ingredients} />
      </CollapsiblePanel>
    </article>
  );
}
