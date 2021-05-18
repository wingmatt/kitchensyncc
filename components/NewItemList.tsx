import { useState, useEffect } from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { createItemList } from '../src/graphql/mutations'

const addList = async (event) => {
  event.preventDefault();
  try {
    const newItemList = await API.graphql(graphqlOperation(createItemList, {
      input: {
        title: event.target.title.value,
        type: "shoppingList"
      }
      
    }))
    console.log(newItemList)
  } catch (err) {
    console.log("Nope:", err)
  }
} 

export default function NewItemList (props) {
  const [title, setTitle] = useState<any>({
    title: "",
  });

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