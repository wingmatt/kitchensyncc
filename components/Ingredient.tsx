import { useState } from 'react'
import {Ingredient as IngredientInterface} from '../types'
import CollapsiblePanel from './CollapsiblePanel'
import styles from '../styles/components/Ingredient.module.css'
import EditableInput from './EditableInput'
import {FiEdit, FiRepeat} from 'react-icons/fi'

export default function Ingredient (props: IngredientInterface) {
  const [editing, setEditing] = useState(false)
  
  return (
  <li className={styles.ingredient}>
    <CollapsiblePanel title={ props.ingredient} status={props.status}>
      <ul>
        <EditableInput editing={editing}>At least {props.quantity} {props.unit}</EditableInput>
        <EditableInput editing={editing}>Expires 01/01/1000</EditableInput>
      </ul>
    </CollapsiblePanel>
    
  </li>
  )
}