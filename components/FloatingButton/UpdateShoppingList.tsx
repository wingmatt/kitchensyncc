import FloatingButton from './'
import { FiCheck } from 'react-icons/fi'
import { usePantry } from '../../src/user-context';



export default function UpdateShoppingList () {
  const {state, dispatch} = usePantry();
  const updateShoppingList = () => {
    const itemLists = state.itemLists;
    itemLists.forEach(itemList => {
      const origin = itemList.shoppingDetails.ingredients
      const destination = itemList.pantryDetails.ingredients
      origin.forEach((item, index) => {
        if (item.checked) {
          const displacedItem = origin.splice(index, 1)
          destination.push(...displacedItem)
        }
      })
    })
    dispatch({type: "SET_ITEM_LISTS", payload: itemLists})
  }
  return (
    <button action="updateShoppingList" onClick={() => updateShoppingList()} label="Update List" icon={<FiCheck focusable="false"/>}>Update List</button>
  )
}