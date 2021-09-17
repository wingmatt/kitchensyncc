import { useState } from 'react'
import { gql_add_item } from '../../src/graphql-actions'
import {usePantry} from '../../src/user-context'



export default function NewItem (props) {
  const {state, dispatch} = usePantry();
  const [title, setTitle] = useState({
    title: "",
  });
  const addItem = async (event) => {
    event.preventDefault();
    try {
      const input = {
        ingredientId: Date.now().toString(),
        itemListId: props.itemListId,
        ingredient: event.target.title.value,
        type: props.type
      }
      gql_add_item(state, input).then(graphqlResponse => {
        const responseData = graphqlResponse.data.updateItemList;
        responseData.type = input.type;
        dispatch({type: "UPDATE_ITEM_LIST", payload: responseData})
      })
      setTitle({
        title: "",
      });
    } catch (err) {
      // TODO: Add indicator on the interface when something has gone horribly awry
      console.log("New item failed to be added:", err)
    }
    
  } 
  return (
      <form onSubmit={addItem} className="new-item data-entry">
        <label>Name <input
          type="text"
          id="title"
          name="title"
          defaultValue={title.title}
          value={title.title}
          onChange={(event) =>
            setTitle({ ...title, title: event.target.value })
          }
        /></label>
        <button>+ Add</button>
      </form>
  )
}