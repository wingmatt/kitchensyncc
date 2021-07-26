import { API, graphqlOperation } from 'aws-amplify'
import { updateItemList } from './graphql/custom-mutations'
import { listItemLists } from "./graphql/custom-queries";

const setDefaultDetails = (itemList) => {
  ['pantryDetails', 'shoppingDetails']
  .forEach (type => {
    if (!itemList[type]) itemList[type] = {ingredients: []}
  })
}

export const gql_get_item_lists = async () => {
  try {
    const graphqlResponse = await API.graphql(graphqlOperation(listItemLists));
    const itemLists = graphqlResponse.data.listItemLists.items
    itemLists.forEach(itemList => {
      setDefaultDetails(itemList)
    })

    return itemLists;


  } catch (err) {
    console.log("GraphQL Fetch Error:", err);
    return;
  }
};

export async function gql_add_item (state, input) {
  console.log(input);
  const currentItemList = state.itemLists.find(itemList => itemList.id === input.itemListId)
  try {
    return await API.graphql(graphqlOperation(updateItemList, {
      input: {
        id: input.itemListId,
        [input.type]: {
          ingredients: [
            ...currentItemList[input.type].ingredients,
            {
              id: input.ingredientId,
              ingredient: input.ingredient
            }
          ]
        }
      }
    }))
  } catch (err) {
    console.log("GraphQL Error:", err)
  }
}

export const gql_move_ingredient = async (state, payload) => {
  const currentItemList = state.itemLists.find(itemList => itemList.id === payload.itemListId)
  const origin = currentItemList[payload.origin].ingredients
  const destination = currentItemList[payload.destination].ingredients
  const displacedItem = origin.splice(payload.itemToMove, 1)
  destination.push(...displacedItem)
  try {
    return await API.graphql(graphqlOperation(updateItemList, {
      input: currentItemList
    }))
  } catch (err) {
    console.log("GraphQL Error:", err)
  }
}

export const gql_update_shopping_list = async (state, payload) => {
  // Get all lists that have checked items + which of their items are checked
  // Or, we could just go through each itemList, check its checked status, and update them 1 by one in a big forEach?
  const listsToUpdate = state.itemLists.reduce((listsToUpdate, itemList) => {
    const checkedItems = itemList.shoppingDetails.ingredients.filter(ingredient => ingredient.checked === true)
    if (checkedItems) return listsToUpdate.push({
      id: itemList.id,
      checkedItems: checkedItems
    })
  }, [])
  // For each list: Move the checked items to pantryDetails. Update shoppingDetails to only have unchecked items.
  listsToUpdate.forEach(itemList => {
    const currentItemList = state.itemLists.find(stateItemList => stateItemList.id === itemList.id)
    const origin = currentItemList.shoppingDetails.ingredients
    const destination = currentItemList.pantryDetails.ingredients
    
    // Right now, checkedItems is a separate array so the keys of the array we're iterating over here will be meaningless.
    // Do we want to add IDs for each ingredient created? Could be as simple as a Date(), added to the DB, or the DB can handle it.
    // Or, do we want to change how we work with the checked items so that we don't create a second array?

  })

  try {
    return await API.graphql(graphqlOperation(updateItemList, {
      input: listsToUpdate
    }))
  } catch (err) {
    console.log("GraphQL Error:", err)
  }
}

export const gql_move_checked_items = async (state, input) => {
    const itemLists = state.itemLists;
    itemLists.forEach(itemList => {
      const origin = itemList.shoppingDetails.ingredients
      const destination = itemList.pantryDetails.ingredients
      itemList.forEach((item, index) => {
        if (item.checked) {
          const displacedItem = origin.splice(index, 1)
          destination.push(...displacedItem)
        }
      })
      
    })
    try {
      return await API.graphql(graphqlOperation(updateItemList, {
        input: itemLists
      }))
    } catch (err) {
      console.log("GraphQL Error:", err)
    }
}