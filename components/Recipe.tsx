import { Recipe as RecipeInterface } from "../types";
import styles from "../styles/components/Recipe.module.css"
import IngredientList from "./IngredientList";
import CollapsiblePanel from "./CollapsiblePanel"

export default function Recipe(props: RecipeInterface) {
  
  return (
    <article className={styles.recipe}>
      <CollapsiblePanel title={props.name}>
        <a href={props.url} className={"button " + styles.button}>Go to Recipe</a>
        <IngredientList title="Ingredients" ingredients={props.ingredients} />
      </CollapsiblePanel>
    </article>
  );
}
