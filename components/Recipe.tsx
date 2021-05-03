import { Recipe as RecipeInterface, Ingredient as IngredientInterface } from "../types";
import styles from "../styles/components/Recipe.module.css"
import CollapsiblePanel from "./CollapsiblePanel"
import { FiExternalLink } from "react-icons/fi"

export default function Recipe(props: RecipeInterface) {
  
  return (
    <article className={styles.recipe}>
      <CollapsiblePanel title={props.name} status={props.status}>
        <a href={props.url} className={"button " + styles.button}><FiExternalLink focusable="false" />Go to Recipe </a>
        <ul>
          <h3>Ingredients</h3>
          {props.ingredients.map((value: IngredientInterface, index) => {
            return (
              <li key={index}>
                <strong>
                  {value.quantity} {value.unit}
                </strong>{" "}
                {value.ingredient}
              </li>
            );
          })}
        </ul>
      </CollapsiblePanel>
    </article>
  );
}
