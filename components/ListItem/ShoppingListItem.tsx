import { useState } from "react";
import { usePantry } from "../../src/user-context";
import { Ingredient as IngredientInterface } from "../../types";
import styles from "../../styles/components/ShoppingListItem.module.css";
import { FiSquare, FiCheckSquare } from "react-icons/fi"

export default function ShoppingListItem(props: IngredientInterface) {
  const [checked, setChecked] = useState(false);
  const {state, dispatch} = usePantry();

  return (
    <li className={styles.listItem} key={props.id}>
      <label className={checked ? styles.checked : ""}>
        {checked ? <FiCheckSquare focusable="false" title="Checked" /> : <FiSquare focusable="false" title="Unchecked"/>}
        <input className="sr-only"
          type="checkbox"
          checked={checked}
          onChange={() => {
            setChecked(!checked)
            dispatch({type: 'UPDATE_INGREDIENT_CHECKBOX', payload: {
              itemListId: props.itemListId,
              ingredientId: props.id,
              checked: !checked
            }})
          }}
        />
        <span>{props.ingredient}</span>
      </label>
    </li>
  );
}
