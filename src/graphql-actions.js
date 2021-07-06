import { API, graphqlOperation } from 'aws-amplify'
import { updateItemList } from './graphql/mutations'

export async function gql_add_item (state, payload) {
  const currentItemList = state.itemLists.find(itemList => itemList.id === payload.itemListId)
  try {
    return await API.graphql(graphqlOperation(updateItemList, {
      input: {
        id: payload.itemListId,
        [payload.type]: {
          ingredients: [
            ...currentItemList[payload.type].ingredients,
            {
              ingredient: payload.ingredient
            }
          ]
        }
      }
    }))
  } catch (err) {
    console.log("GraphQL Error:", err)
  }
}

