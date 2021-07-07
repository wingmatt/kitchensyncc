import { API, graphqlOperation } from 'aws-amplify'
import { updateItemList } from './graphql/mutations'
import { listItemLists } from "../src/graphql/queries";

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

