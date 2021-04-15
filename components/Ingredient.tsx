import { useState } from 'react'
import {Ingredient as IngredientInterface} from '../types'
import CollapsiblePanel from './CollapsiblePanel'
import styles from '../styles/components/Ingredient.module.css'
import EditableInput from './EditableInput'

export default function Ingredient (props: IngredientInterface) {
  const [editing, setEditing] = useState(false)
  
  return (
  <li className={styles.ingredient}>
    <CollapsiblePanel title={"⚫ " + props.ingredient}>
      <ul>
        <EditableInput editing={editing}>{props.quantity} {props.unit}</EditableInput>
        <EditableInput editing={editing}>Expires 01/01/1000</EditableInput>
      </ul>
      <div className={styles.actions}>
        <button onClick={() => setEditing(!editing)}>Edit</button>
        <button>Remove</button>
      </div>
    </CollapsiblePanel>
    
  </li>
  )
}