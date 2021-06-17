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
      const newItem = {
        id: graphqlResponse.data.updateItemList.id,
        ingredient: graphqlResponse.data.updateItemList.shoppingDetails.ingredients[0].ingredient,
        type: "shoppingDetails",

      }
      dispatch({type: "ADD_ITEM", payload: newItem})
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