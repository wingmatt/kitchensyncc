import { useEffect } from "react";
import {usePantry} from '../src/user-context'
import ItemGroup from "./ItemGroup"
import ShoppingListItem from "./ListItem/ShoppingListItem";
import NewItem from "./ListItem/NewItem"

import { gql_get_item_lists } from '../src/graphql-actions'

const WaitUntilUserData = (props) => {
  const {state} = usePantry();
  if (state.user !== null) {
    return (
      <ItemListFeed user={state.user}>{props.children}</ItemListFeed>
    )
  } else {
    return <>Loading...</>;
  }
};

const ItemListFeed = () => {
  const {state, dispatch} = usePantry()
  useEffect(() => {
    gql_get_item_lists().then((pantryList) => {
      dispatch({type: "ADD_ITEM_LISTS", payload: pantryList})
    });
  }, []);
  return <>{state.itemLists.map((itemList) => {
    if (itemList.shoppingDetails) {
      return (
        <ItemGroup key={itemList.id} title={itemList.title}>
          { itemList.shoppingDetails.ingredients.map((ingredient) => {
            return (
              <ShoppingListItem quantity={ingredient.quantity} unit={ingredient.unit} ingredient={ingredient.ingredient} status={ingredient.status}/>
            )
          })}
          <NewItem itemListId={itemList.id} type="shoppingDetails" />
        </ItemGroup>
      );
    } else {
      return (
        <ItemGroup key={itemList.id} title={itemList.title}>
          <NewItem itemListId={itemList.id} type="shoppingDetails" />
        </ItemGroup>
      );
    }
    
  })}</>
}

export default WaitUntilUserData