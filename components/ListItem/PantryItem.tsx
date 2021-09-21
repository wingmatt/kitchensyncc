import { useState } from "react";
import { Ingredient as IngredientInterface } from "../../types";
import CollapsiblePanel from "../CollapsiblePanel";
import styles from "../../styles/components/Ingredient.module.css";
import EditableField from "../EditableField";
import { FiEdit, FiRepeat } from "react-icons/fi";
import {usePantry} from "../../src/user-context"
import { gql_move_ingredient, gql_remove_ingredient } from "../../src/graphql-actions"

const PantryActions = (props: { className: string; editing: any; id: string; itemListId: string }) => {
  const {state, dispatch} = usePantry();
  const {
    // @ts-ignore: Initializer provides no value for this binding element and the binding element has no default value.
    editing: [editing, setEditing],
  } = {
    editing: useState(false), // This also works if we just set it to props.editing
    ...(props.editing || {}), // This is apparently crucial to passing the state through
  };
  if (editing) {
    return (
      <div className={styles.actions}>
        <button onClick={() => {
          setEditing(!editing)
          }}>
          <FiEdit focusable="false" />
          Update
        </button>
        <button onClick={() => removePantryItem(state, dispatch, props.itemListId, props.id)}>
          <FiRepeat focusable="false" />
          Remove
        </button>
      </div>
    );
  } else {
    return (
      <div className={styles.actions}>
        <button onClick={() => setEditing(!editing)}>
          <FiEdit focusable="false" />
          Edit
        </button>
        <button onClick={() => reorderPantryItem(state, dispatch, props.itemListId, props.id)}>
          <FiRepeat focusable="false" />
          Reorder
        </button>
      </div>
    );
  }
 
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
    <li className={styles.ingredient} key={props.id}>
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
          id={props.id}
          itemListId={props.itemListId}
        />
      </CollapsiblePanel>
    </li>
  );
}

const reorderPantryItem = (state, dispatch, itemListId, ingredientId) => {
  
  gql_move_ingredient(state, {
    itemListId: itemListId,
    ingredientId: ingredientId,
    origin: "pantryDetails",
    destination: "shoppingDetails"
  }).then(graphqlResponse => {
    // @ts-ignore: Property 'data' does not exist on type 'GraphQLResult<object> | Observable<object>'.
    const responseData = graphqlResponse.data.updateItemList;
    dispatch({type: "UPDATE_ITEM_LIST", payload: responseData})
  })
}

const removePantryItem = (state, dispatch, itemListId, ingredientId) => {
  gql_remove_ingredient(state, {
    itemListId: itemListId,
    ingredientId: ingredientId,
    origin: "pantryDetails",
    destination: "shoppingDetails"
  }).then(graphqlResponse => {
    // @ts-ignore: Property 'data' does not exist on type 'GraphQLResult<object> | Observable<object>'.
    const responseData = graphqlResponse.data.updateItemList;
    dispatch({type: "UPDATE_ITEM_LIST", payload: responseData})
  })
}

const processUpdates = (state, dispatch, itemListId, ingredientId) => {

}