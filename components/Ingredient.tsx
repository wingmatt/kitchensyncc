import { useState } from 'react'
import {Ingredient as IngredientInterface} from '../types'
import CollapsiblePanel from './CollapsiblePanel'
import styles from '../styles/components/Ingredient.module.css'
import EditableInput from './EditableInput'
import {FiEdit, FiRepeat} from 'react-icons/fi'

const InputActions = (props: {
  type: IngredientInterface["type"],
  className: string,
  editing: any
}) => {
  const {
    // @ts-ignore: Initializer provides no value for this binding element and the binding element has no default value.
    editing: [editing, setEditing]
  } = {
    editing: useState(false), // This also works if we just set it to props.editing
    ...(props.editing || {}) // This is apparently crucial to passing the state through
  }
  switch (props.type) {
    case 'pantry':
      return (
        <div className={styles.actions}>
          <button onClick={() => setEditing(!editing)}><FiEdit/>Edit</button>
          <button><FiRepeat/>Reorder</button>
        </div>
      )
    case 'shopping':
      return (
        <div className={styles.actions}>
          <button onClick={() => setEditing(!editing)}>Edit</button>
          <button>Remove</button>
        </div>
      )
    case 'recipe':
      return (
        <div className={styles.actions}>
          <button onClick={() => setEditing(!editing)}>Edit</button>
          <button>Add to List</button>
        </div>
      )
  }
}

export default function Ingredient (props: IngredientInterface) {
  const [editing, setEditing] = useState(false)
  
  return (
  <li className={styles.ingredient}>
    <CollapsiblePanel title={ props.ingredient} status={props.status}>
      <ul>
        <EditableInput editing={editing}>At least {props.quantity} {props.unit}</EditableInput>
        <EditableInput editing={editing}>Expires 01/01/1000</EditableInput>
      </ul>
      <InputActions type={props.type} className={styles.actions} editing={{editing: [editing, setEditing]}} />
    </CollapsiblePanel>
    
  </li>
  )
}