import {FloatingButton as FloatingButtonInterface} from '../types'
import {FiEdit2, FiCheck} from 'react-icons/fi'
import styles from '../styles/components/FloatingButton.module.css'

const labelFromAction = (action: FloatingButtonInterface["action"]): FloatingButtonInterface => {
  switch (action) {
    case 'editShoppingList':
      return {
        action: action,
        label: "Edit List",
        icon: <FiEdit2 focusable="false"/>
      }
    case 'updateShoppingList':
      return {
        action: action,
        label: "Update List",
        icon: <FiCheck focusable="false"/>
      }
  }
}

export default function FloatingButton (props) {
  const {action, label, icon} = labelFromAction(props.action)
  
  return (
    <button className={styles[action]} title={label} >
      {icon}
    </button>
  )
}