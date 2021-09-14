import FloatingButton from './'
import { FiCheck } from 'react-icons/fi'
import { usePantry } from '../../src/user-context';
import { gql_update_item_lists } from '../../src/graphql-actions';


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
      itemList.pantryDetails.ingredients = itemList.pantryDetails.ingredients.concat(updates.moved);
      itemList.shoppingDetails.ingredients = updates.unmoved;
    })
    gql_update_item_lists(itemLists).then(graphqlResponse => {
      dispatch({type: "SET_ITEM_LISTS", payload: itemLists})
    })
  }
  return (
     // @ts-ignore: 'children' is not assignable to type 'Button'
    <button action="updateShoppingList" onClick={() => updateShoppingList()} label="Update List" icon={<FiCheck focusable="false"/>}>Update List</button>
  )
}