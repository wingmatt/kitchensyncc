import Layout from '../components/Layout'
import ItemGroup from '../components/ItemGroup'
import PantryItem from '../components/ListItem/PantryItem'
import AddToPantry from '../components/FloatingButton/AddToPantry'
import { API } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { getItemList, listItemLists } from '../src/graphql/queries'

export default function Pantry(){
  const [itemLists, setItemLists] = useState([]);
  useEffect(() => {
    const getPantryLists = async () => {
      try {
        const pantryLists = await API.graphql({query: listItemLists/*,variables: {type:"pantryList"}*/}) //as Promise<ListItemListResult>
        console.log(pantryLists)
        //setItemLists(pantryLists)
      } catch (err) {
        console.log("GraphQL Fetch Error:", err)
      }
    }
    console.log(getPantryLists)
  }, [])
  return (
    <Layout title="Pantry">
      <ItemGroup title="Produce">
        <PantryItem quantity="1" unit="cup" ingredient="sugar" status="ok"/>
        <PantryItem quantity="1" unit="cup" ingredient="sour cream" status="warning"/>
        <PantryItem quantity="1" unit="cup" ingredient="Saffron" status="critical"/>
        <PantryItem quantity="1" unit="cup" ingredient="Salt"/>
      </ItemGroup>
      <h2>Real Data</h2>
      {itemLists.map((itemList) => {
        return (
          <ItemGroup title={itemList.title}>
            {itemList.ingredients.map((ingredient) => {
              return (
                <PantryItem quantity={ingredient.quantity} unit={ingredient.unit} ingredient={ingredient.ingredient} status={ingredient.status}/>
              )
            })}
          </ItemGroup>
        )
      })}
      <div className="floating-button-container">
        <AddToPantry />
      </div>
    </Layout>
  )
}