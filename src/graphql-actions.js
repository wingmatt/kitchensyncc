import { API, graphqlOperation } from 'aws-amplify'
import { updateItemList } from './graphql/custom-mutations'
import { listItemLists } from "./graphql/custom-queries";
import { createItemList, deleteItemList } from './graphql/mutations'

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

export const gql_move_ingredient = async (state, input) => {
  const currentItemList = state.itemLists.find(itemList => itemList.id === input.itemListId)
  const origin = currentItemList[input.origin].ingredients
  const destination = currentItemList[input.destination].ingredients
  const ingredientToMove = origin.find(ingredient => ingredient.id == input.ingredientId)
  const remainingIngredients = origin.filter(ingredient =>  ingredient != ingredientToMove)
  const updatedDestination = [...destination, ingredientToMove]
  const updatedItemList = {
    ...currentItemList,
    [input.origin]: {
      ingredients: remainingIngredients
    },
    [input.destination]: {
      ingredients: updatedDestination
    }
  }
  try {
    return await API.graphql(graphqlOperation(updateItemList, {
      input: updatedItemList
    }))
  } catch (err) {
    console.log("GraphQL Error:", err)
  }
}
export const gql_add_item_list = async (title) => {
  const graphqlResponse = await API.graphql(graphqlOperation(createItemList, {
    input: {
      title: title,
      pantryDetails: {
        ingredients: []
      },
      shoppingDetails: {
        ingredients: []
      }
    }
  }))
  const newItemList = {
    id: graphqlResponse.data.createItemList.id,
    title: graphqlResponse.data.createItemList.title,
    pantryDetails: {
      ingredients: []
    },
    shoppingDetails: {
      ingredients: []
    }
  }
  return newItemList;
}

export const gql_update_item_list = async (state, input) => {
  const currentItemList = state.itemLists.find(itemList => itemList.id === input.itemListId)
  const updatedItemList = {
    ...currentItemList,
    // Update the order or the title, depending on what is passed as the input
    // So input can be {order: currentItemList.order +/- 1} or {title: 'new string'}
    input
  }
  return await API.graphql(graphqlOperation(updateItemList, {
    input: itemList
  }))
}

export const gql_update_item_lists = async (input) => {
  input.forEach (async (itemList) => {
    try {
      return await API.graphql(graphqlOperation(updateItemList, {
        input: itemList
      }))
    } catch (err) {
      console.log("GraphQL Error:", err)
    }
  })
}

export const gql_delete_item_list = async (input) => {
  return await API.graphql(graphqlOperation(deleteItemList, {
    input: {id: input}
  }))
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

export const gql_remove_ingredient = async (state, input) => {
  const currentItemList = state.itemLists.find(itemList => itemList.id === input.itemListId)
  const origin = currentItemList[input.origin].ingredients
  const ingredientToMove = origin.find(ingredient => ingredient.id == input.ingredientId)
  const remainingIngredients = origin.filter(ingredient =>  ingredient != ingredientToMove)
  const updatedItemList = {
    ...currentItemList,
    [input.origin]: {
      ingredients: remainingIngredients
    }
  }
  try {
    return await API.graphql(graphqlOperation(updateItemList, {
      input: updatedItemList
    }))
  } catch (err) {
    console.log("GraphQL Error:", err)
  }
}