import { useEffect } from "react";
import {usePantry} from '../src/user-context'
import ItemGroup from "./ItemGroup"
import Item from "./ListItem/Item";
import NewItem from "./ListItem/NewItem"

import { gql_get_item_lists } from '../src/graphql-actions'

const WaitUntilUserData = (props) => {
  const {state} = usePantry();
  if (state.user !== null) {
    return (
      <ItemListFeed user={state.user} type={props.type}>{props.children}</ItemListFeed>
    )
  } else {
    return <>Loading...</>;
  }
};

const ItemListFeed = (props) => {
  const {state, dispatch} = usePantry()
  useEffect(() => {
    gql_get_item_lists().then((pantryList) => {
      dispatch({type: "SET_ITEM_LISTS", payload: pantryList})
    });
  }, []);
  return <>{state.itemLists.map((itemList) => {
    if (itemList[props.type]) {
      return (
        <ItemGroup key={itemList.id} title={itemList.title}>
          { itemList[props.type].ingredients.map((ingredient) => {
            return (
              <Item type={props.type} quantity={ingredient.quantity} unit={ingredient.unit} ingredient={ingredient.ingredient} status={ingredient.status}/>
            )
          })}
          <NewItem itemListId={itemList.id} type={props.type} />
        </ItemGroup>
      );
    } else {
      return (
        <ItemGroup key={itemList.id} title={itemList.title}>
          <NewItem itemListId={itemList.id} type={props.type} />
        </ItemGroup>
      );
    }
    
  })}</>
}

export default WaitUntilUserData