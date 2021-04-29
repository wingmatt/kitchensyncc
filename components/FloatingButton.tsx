import {FloatingButton as FloatingButtonInterface} from '../types'
import {FiEdit, FiCheck} from 'react-icons/fi'
import styles from '../styles/components/FloatingButton.module.css'

const labelFromAction = (action: FloatingButtonInterface["action"]): FloatingButtonInterface => {
  switch (action) {
    case 'editShoppingList':
      return {
        action: action,
        label: "Edit",
        icon: <FiEdit/>
      }
    case 'updateShoppingList':
      return {
        action: action,
        label: "Update",
        icon: <FiCheck/>
      }
  }
}

export default function FloatingButton (props) {
  const {action, label, icon} = labelFromAction(props.action)
  
  return (
    <button className={styles[action]} >
      {icon}{label}
    </button>
  )
}