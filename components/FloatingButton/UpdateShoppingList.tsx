import FloatingButton from './'
import { FiCheck } from 'react-icons/fi'
import { usePantry } from '../../src/user-context';



export default function UpdateShoppingList () {
  const {state, dispatch} = usePantry();
  const updateShoppingList = () => {
    const itemLists = state.itemLists;
    itemLists.forEach(itemList => {
      const updates = itemList.shoppingDetails.ingredients.reduce((updates, item) => {
        if (item.checked) {
          updates.moved.push(item)
        } else {
          updates.unmoved.push(item)
        }
        return updates;
      }, {
        moved: [],
        unmoved: []
      })
      itemList.pantryDetails.ingredients = updates.moved;
      itemList.shoppingDetails.ingredients = updates.unmoved;
    })
    dispatch({type: "SET_ITEM_LISTS", payload: itemLists})
  }
  return (
    <button action="updateShoppingList" onClick={() => updateShoppingList()} label="Update List" icon={<FiCheck focusable="false"/>}>Update List</button>
  )
}