import Layout from "../components/Layout";
import ItemGroup from "../components/ItemGroup";
import ShoppingListItem from "../components/ListItem/ShoppingListItem";
import FloatingButton from "../components/FloatingButton";
import NewItemList from "../components/NewItemList";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState, useContext } from "react";
import { listItemLists } from "../src/graphql/queries";
import { onCreateItemList } from "../src/graphql/subscriptions";
import {usePantry} from '../src/user-context'

import { UserContext } from "../pages/_app";

export default function List() {
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
    /*await getPantryLists().then((pantryList) => {
      setItemLists(pantryList);
    });*/
  }, []);
  useEffect (()=> {
    const subscription = API.graphql(
      // TODO: Wait until there's a user ID within context to run this
      graphqlOperation(onCreateItemList, { owner: context.user.id })
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
  
  return (
    <Layout title="Shopping List">
      <ItemGroup title="Produce">
        <ShoppingListItem quantity="1" unit="cup" ingredient="sugar" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="sour cream" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Saffron" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Salt" />
      </ItemGroup>
      <ItemGroup title="Spices">
        <ShoppingListItem quantity="1" unit="cup" ingredient="sugar" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="sour cream" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Saffron" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Salt" />
      </ItemGroup>
      <ItemGroup title="Meat">
        <ShoppingListItem quantity="1" unit="cup" ingredient="sugar" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="sour cream" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Saffron" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Salt" />
      </ItemGroup>
      <ItemGroup title="Dairy">
        <ShoppingListItem quantity="1" unit="cup" ingredient="sugar" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="sour cream" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Saffron" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Salt" />
      </ItemGroup>
      <h2>Real Data</h2>
      {itemLists.map((itemList) => {
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
      })}
      <NewItemList />
      <div className="floating-button-container">
        <FloatingButton action="editShoppingList" />
        <FloatingButton action="updateShoppingList" />
      </div>
    </Layout>
  );
}
