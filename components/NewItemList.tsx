import { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createItemList } from '../src/graphql/mutations'
import {usePantry} from '../src/user-context'



export default function NewItemList (props) {
  const {dispatch} = usePantry();
  const [title, setTitle] = useState<any>({
    title: "",
  });
  const addList = async (event) => {
    event.preventDefault();
    try {
      const graphqlResponse = await API.graphql(graphqlOperation(createItemList, {
        input: {
          title: event.target.title.value,
          type: "shoppingList",
          pantryDetails: {
            ingredients: []
          },
          shoppingDetails: {
            ingredients: []
          }
        }
      }))
      const newItemList = {
        id: graphqlResponse.data.createItemList.id,
        title: graphqlResponse.data.createItemList.title,
        pantryDetails: {
          ingredients: []
        },
        shoppingDetails: {
          ingredients: []
        }
      }
      dispatch({type: "ADD_ITEM_LIST", payload: newItemList})
    } catch (err) {
      console.log("Nope:", err)
    }
  } 
  return (
      <form onSubmit={addList}>
        <label>Title: <input
          type="text"
          id="title"
          name="title"
          defaultValue={title.title}
          onChange={(event) =>
            setTitle({ ...title, title: event.target.value })
          }
        /></label>
        <button>+ New List</button>
      </form>
  )
}