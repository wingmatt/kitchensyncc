import { useState } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { updateItemList } from '../../src/graphql/mutations'
import {usePantry} from '../../src/user-context'



export default function NewItem (props) {
  const {dispatch} = usePantry();
  const [title, setTitle] = useState<any>({
    title: "",
  });
  const addItem = async (event) => {
    event.preventDefault();
    try {
      const graphqlResponse = await API.graphql(graphqlOperation(updateItemList, {
        input: {
          id: props.itemListId,
          shoppingDetails: {
            ingredients: [
              {
                ingredient: event.target.title.value
              }
            ]
          }
        }
      }))
      //dispatch({type: "ADD_ITEM_LIST", payload: newItemList})
    } catch (err) {
      console.log("Nope:", err)
    }
  } 
  return (
      <form onSubmit={addItem}>
        <label>Title: <input
          type="text"
          id="title"
          name="title"
          defaultValue={title.title}
          onChange={(event) =>
            setTitle({ ...title, title: event.target.value })
          }
        /></label>
        <button>+ Add</button>
      </form>
  )
}