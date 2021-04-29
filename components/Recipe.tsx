import { Recipe as RecipeInterface, Ingredient as IngredientInterface } from "../types";
import styles from "../styles/components/Recipe.module.css"
import CollapsiblePanel from "./CollapsiblePanel"
import { FiExternalLink } from "react-icons/fi"
import ItemGroup from '../components/ItemGroup'

export default function Recipe(props: RecipeInterface) {
  
  return (
    <article className={styles.recipe}>
      <CollapsiblePanel title={props.name} status={props.status}>
        <a href={props.url} className={"button " + styles.button}><FiExternalLink focusable="false" />Go to Recipe </a>
        <ItemGroup title="Ingredients">
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
        </ItemGroup>
      </CollapsiblePanel>
    </article>
  );
}
