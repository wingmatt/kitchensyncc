import { useState } from "react";
import { Ingredient as IngredientInterface } from "../../types";
import CollapsiblePanel from "../CollapsiblePanel";
import styles from "../../styles/components/Ingredient.module.css";
import EditableInput from "../EditableInput";
import IngredientUnitInput from "../EditableInput/IngredientUnitInput"
import { FiEdit, FiRepeat } from "react-icons/fi";

const PantryActions = (props: { className: string; editing: any }) => {
  const {
    // @ts-ignore: Initializer provides no value for this binding element and the binding element has no default value.
    editing: [editing, setEditing],
  } = {
    editing: useState(false), // This also works if we just set it to props.editing
    ...(props.editing || {}), // This is apparently crucial to passing the state through
  };
  return (
    <div className={styles.actions}>
      <button onClick={() => setEditing(!editing)}>
        <FiEdit focusable="false" />
        Edit
      </button>
      <button>
        <FiRepeat focusable="false" />
        Reorder
      </button>
    </div>
  );
};

const statusToLabel = (status) => {
  switch (status) {
    case "ok":
      return "Have";
    case "warning":
      return "Need to Use";
    case "critical":
      return "Expired";
  }
};

export default function PantryItem(props: IngredientInterface) {
  const [editing, setEditing] = useState(false);

  return (
    <li className={styles.ingredient}>
      <CollapsiblePanel
        title={props.ingredient}
        status={props.status}
        statusLabel={statusToLabel(props.status)}
      >
        <ul>
          <li>
            Amount: 
            <EditableInput label="Amount" type="number" editing={editing}>
              {props.quantity}
            </EditableInput>
            <IngredientUnitInput label="Unit" type="text" editing={editing}>
              {props.unit}
            </IngredientUnitInput>
          </li>
          <li>
            Expires: 
            <EditableInput label="Expires" type="date" editing={editing}>
              01/01/1000
            </EditableInput>
          </li>
        </ul>
        <PantryActions
          className={styles.actions}
          editing={{ editing: [editing, setEditing] }}
        />
      </CollapsiblePanel>
    </li>
  );
}
