import { API, graphqlOperation } from "aws-amplify";
import { useEffect } from "react";
import { listItemLists } from "../src/graphql/queries";
import {usePantry} from '../src/user-context'
import ItemGroup from "./ItemGroup"
import ShoppingListItem from "./ListItem/ShoppingListItem";
import NewItem from "./ListItem/NewItem"

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
  useEffect(async () => {
    const getPantryLists = async () => {
      try {
        const pantryLists = await API.graphql(graphqlOperation(listItemLists));
        return pantryLists.data.listItemLists.items;
      } catch (err) {
        console.log("GraphQL Fetch Error:", err);
        return;
      }
    };
    await getPantryLists().then((pantryList) => {
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
          <NewItem itemListId={itemList.id} />
        </ItemGroup>
      );
    } else {
      return (
        <ItemGroup key={itemList.id} title={itemList.title}>
          <NewItem itemListId={itemList.id} />
        </ItemGroup>
      );
    }
    
  })}</>
}

export default WaitUntilUserData