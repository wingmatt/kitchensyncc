import {useState} from 'react'
import { FiSettings, FiPlusCircle } from "react-icons/fi";
import styles from "../styles/components/ItemGroup.module.css";

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
      <EditItemGroup editing={editing} />
      {props.children}
    </ul>
  );
}

const EditItemGroup = (props) => {
  if (props.editing) {
    return (
      <section className={styles.editPanel}>
        <button>Rename</button>
        <button>Move Up</button>
        <button>Move Down</button>
        <button>Delete</button>
      </section>
    ) 
  } else return <></>
}