import { API, graphqlOperation } from 'aws-amplify'
import { updateItemList } from './graphql/mutations'
import { listItemLists } from "../src/graphql/queries";


export const gql_get_item_lists = async () => {
  try {
    const pantryLists = await API.graphql(graphqlOperation(listItemLists));
    return pantryLists.data.listItemLists.items;
  } catch (err) {
    console.log("GraphQL Fetch Error:", err);
    return;
  }
};

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

