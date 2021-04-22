import { useState } from "react";
import { Ingredient as IngredientInterface } from "../types";
import CollapsiblePanel from "./CollapsiblePanel";
import styles from "../styles/components/Ingredient.module.css";
import EditableInput from "./EditableInput";

export default function ShoppingListItem(props: IngredientInterface) {
  const [editing, setEditing] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <li className={styles.ingredient}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        {props.ingredient}
      </label>
    </li>
  );
}
