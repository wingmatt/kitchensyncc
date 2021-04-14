import { useState } from 'react'
import { Recipe as RecipeInterface } from "../types";
import IngredientList from "./IngredientList";
import CollapsiblePanel from "./CollapsiblePanel"

export default function Recipe(props: RecipeInterface) {
  const [expanded, setExpanded] = useState(false)
  
  return (
    <article className="recipe">
      <img src="https://via.placeholder.com/300x200" alt={props.name}></img>
      <CollapsiblePanel title={props.name}>
        <a href={props.url}>Go to Recipe</a>
        <IngredientList title="Ingredients" ingredients={props.ingredients} />
      </CollapsiblePanel>
    </article>
  );
}
