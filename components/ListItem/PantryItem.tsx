import { useState } from "react";
import { Ingredient as IngredientInterface } from "../../types";
import CollapsiblePanel from "../CollapsiblePanel";
import styles from "../../styles/components/Ingredient.module.css";
import EditableField from "../EditableField";
import { FiEdit, FiRepeat } from "react-icons/fi";
import {usePantry} from "../../src/user-context"
import { gql_move_ingredient } from "../../src/graphql-actions"

const PantryActions = (props: { className: string; editing: any; index: number; itemListId: string }) => {
  const {state, dispatch} = usePantry();
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
      <button onClick={() => reorderPantryItem(state, dispatch, props.itemListId, props.index)}>
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
    <li className={styles.ingredient} key={props.index}>
      <CollapsiblePanel
        title={props.ingredient}
        status={props.status}
        statusLabel={statusToLabel(props.status)}
      >
        <ul>
          <li>
            Amount: 
            <EditableField label="Amount" type="number" editing={editing}>
              {props.quantity}
            </EditableField>
            <EditableField label="Unit" type="text" editing={editing}>
              {props.unit}
            </EditableField>
          </li>
          <li>
            Expires: 
            <EditableField label="Expires" type="date" editing={editing}>
              {props.expires}
            </EditableField>
          </li>
        </ul>
        <PantryActions
          className={styles.actions}
          editing={{ editing: [editing, setEditing] }}
          index={props.index}
          itemListId={props.itemListId}
        />
      </CollapsiblePanel>
    </li>
  );
}

const reorderPantryItem = (state, dispatch, itemListId, index) => {
  
  gql_move_ingredient(state, {
    itemListId: itemListId,
    itemToMove: index,
    origin: "pantryDetails",
    destination: "shoppingDetails"
  }).then(graphqlResponse => {
    const responseData = graphqlResponse.data.updateItemList;
    responseData.type = "pantryDetails";
    dispatch({type: "ADD_ITEM", payload: responseData})
  })
}