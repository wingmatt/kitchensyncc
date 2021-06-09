import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useContext } from "react";
import { listItemLists } from "../src/graphql/queries";
import { onCreateItemList } from "../src/graphql/subscriptions";
import { UserContext } from "../pages/_app";
import {usePantry} from '../src/user-context'
import ItemGroup from "./ItemGroup"

const WaitUntilUserData = (props) => {
  const context: any = useContext(UserContext);
  if (context.user !== null) {
    return (
      <ItemListFeed user={context.user}>{props.children}</ItemListFeed>
    )
  } else {
    return <>Loading...</>;
  }
};

const ItemListFeed = (props) => {
  const [{itemLists}, dispatch]: any = usePantry()
  const context = useContext(UserContext);
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
      graphqlOperation(onCreateItemList, { owner: props.user.id })
    ).subscribe({
      next: ({ provider, value }) => {
        let newItemList = {
          id: value.data.onCreateItemList.id,
          title: value.data.onCreateItemList.title,
          ingredients: [],
        };
        console.log(itemLists);
        dispatch({type: "ADD_ITEM_LIST", payload: newItemList})
        subscription.unsubscribe();
      },
      error: (error) => {
        console.warn(error);
      },
    });
  }, [itemLists])
  return <>{itemLists.map((itemList) => {
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