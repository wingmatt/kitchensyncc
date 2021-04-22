import { useState } from "react";
import { Ingredient as IngredientInterface } from "../types";
import styles from "../styles/components/ShoppingListItem.module.css";
import { FiSquare, FiCheckSquare } from "react-icons/fi"

export default function ShoppingListItem(props: IngredientInterface) {
  const [editing, setEditing] = useState(false);
  const [checked, setChecked] = useState(false);

  return (
    <li className={styles.listItem}>
      <label>
        {checked ? <FiCheckSquare/> : <FiSquare/>}
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span>{props.ingredient}</span>
      </label>
    </li>
  );
}
