import { useState } from "react";
import { Ingredient as IngredientInterface } from "../../types";
import styles from "../../styles/components/ShoppingListItem.module.css";
import { FiSquare, FiCheckSquare } from "react-icons/fi"

export default function ShoppingListItem(props: IngredientInterface) {
  const [checked, setChecked] = useState(false);

  return (
    <li className={styles.listItem} key={props.index}>
      <label className={checked ? styles.checked : ""}>
        {checked ? <FiCheckSquare focusable="false" title="Checked" /> : <FiSquare focusable="false" title="Unchecked"/>}
        <input className="sr-only"
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span>{props.ingredient}</span>
      </label>
    </li>
  );
}
