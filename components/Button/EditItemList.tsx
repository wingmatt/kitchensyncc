import { FiSettings } from "react-icons/fi";
import {useState} from 'react'

const EditItemList = () => {
  const [editing, setEditing] = useState(false);
  return (
    <>
      <button onClick={() => setEditing(!editing)}>
        <FiSettings/>
      </button>
    </>
  )
}

export default EditItemList;