import { useEffect } from "react";
import {usePantry} from '../src/user-context'
import ItemGroup from "./ItemGroup"
import Item from "./ListItem/Item";
import NewItem from "./ListItem/NewItem"

import { gql_get_item_lists } from '../src/graphql-actions'

const ItemListFeed = (props) => {
  const {state, dispatch} = usePantry()
  useEffect(() => {
    gql_get_item_lists().then((pantryList) => {
      dispatch({type: "SET_ITEM_LISTS", payload: pantryList})
    });
  }, []);
  return <>{state.itemLists.map((itemList) => {
    return (
      <ItemGroup key={itemList.id} title={itemList.title}>
        { itemList[props.type]?.ingredients.map((ingredient, index) => {
          return (
            <Item type={props.type} quantity={ingredient.quantity} unit={ingredient.unit} ingredient={ingredient.ingredient} status={ingredient.status} index={index} itemListId={itemList.id}/>
          )
        })}
        <NewItem itemListId={itemList.id} type={props.type} />
      </ItemGroup>
    );
  })}</>
}

export default ItemListFeed