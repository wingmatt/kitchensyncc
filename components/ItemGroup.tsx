import {useState} from 'react'
import {usePantry} from '../src/user-context'
import { FiSettings, FiPlusCircle } from "react-icons/fi";
import styles from "../styles/components/ItemGroup.module.css";
import { gql_delete_item_list } from "../src/graphql-actions";

export default function ItemGroup(props) {
  const [editing, setEditing] = useState(false);
  const toggleEditing = () => setEditing(!editing)
  return (
    <ul className="content-list">
      <div className={styles.heading}>
        <h2>{props.title}</h2>
        <div className={styles.actions}>
          <FiSettings onClick={toggleEditing}/> <FiPlusCircle />
        </div> 
      </div>
      <EditItemGroup editing={editing} id={props.id} />
      {props.children}
    </ul>
  );
}

const EditItemGroup = (props) => {
  const {dispatch} = usePantry()
  const deleteItemList = (id) => {
    gql_delete_item_list(props.id).then(graphqlResponse => {
      const responseData = graphqlResponse.data.deleteItemList
      dispatch({type: "DELETE_ITEM_LIST", payload: responseData.id})
    })
  }
  if (props.editing) {
    return (
      <section className={styles.editPanel}>
        <button>Rename</button>
        <button>Move Up</button>
        <button>Move Down</button>
        <button onClick={() => deleteItemList(props.id)}>Delete</button>
      </section>
    ) 
  } else return <></>
}