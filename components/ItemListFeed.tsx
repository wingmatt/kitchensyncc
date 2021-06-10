import { API, graphqlOperation } from "aws-amplify";
import { useEffect } from "react";
import { listItemLists } from "../src/graphql/queries";
import { onCreateItemList } from "../src/graphql/subscriptions";
import {usePantry} from '../src/user-context'
import ItemGroup from "./ItemGroup"

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
  useEffect (()=> {
    const subscription = API.graphql(
      graphqlOperation(onCreateItemList, { owner: state.user })
    ).subscribe({
      next: ({ provider, value }) => {
        let newItemList = {
          id: value.data.onCreateItemList.id,
          title: value.data.onCreateItemList.title,
          ingredients: [],
        };
        console.log();
        dispatch({type: "ADD_ITEM_LIST", payload: newItemList})
        subscription.unsubscribe();
      },
      error: (error) => {
        console.warn(error);
      },
    });
  })
  return <>{state.itemLists.map((itemList) => {
    return (
      <ItemGroup key={itemList.id} title={itemList.title}>
        Yes!
        {/*itemList.ingredients.map((ingredient) => {
          return (
            <PantryItem quantity={ingredient.quantity} unit={ingredient.unit} ingredient={ingredient.ingredient} status={ingredient.status}/>
          )
        })*/}
      </ItemGroup>
    );
  })}</>
}

export default WaitUntilUserData