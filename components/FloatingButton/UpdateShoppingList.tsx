import FloatingButton from './'
import { FiCheck } from 'react-icons/fi'

const updateShoppingList = () => {

}

export default function UpdateShoppingList () {
  return (
    <FloatingButton action="updateShoppingList" label="Update List" icon={<FiCheck focusable="false"/>} />
  )
}