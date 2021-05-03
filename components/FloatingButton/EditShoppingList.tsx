import FloatingButton from './'
import { FiEdit2 } from 'react-icons/fi'

const editShoppingList = () => {

}

export default function EditShoppingList () {
  return (
    <FloatingButton action={editShoppingList} label="Edit List" icon={<FiEdit2 focusable="false"/>} />
  )
}