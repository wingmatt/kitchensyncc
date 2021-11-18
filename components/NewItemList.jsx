import { useState } from 'react'
import { gql_add_item_list } from '../src/graphql-actions'
import {usePantry} from '../src/user-context'



export default function NewItemList () {
  const {dispatch} = usePantry();
  const [title, setTitle] = useState({
    title: "",
  });
  const addList = async (event) => {
    event.preventDefault();
    try {
      const newItemList = await gql_add_item_list(event.target.title.value);
      dispatch({type: "ADD_ITEM_LIST", payload: newItemList})
      setTitle({
        title: "",
      });
    } catch (err) {
      console.log("Nope:", err)
    }
  } 
  return (
      <form onSubmit={addList} className="new-item-list data-entry">
        <label>Title <input
          type="text"
          id="title"
          name="title"
          value={title.title}
          onChange={(event) =>
            setTitle({ ...title, title: event.target.value })
          }
        /></label>
        <button>+ New List</button>
      </form>
  )
}