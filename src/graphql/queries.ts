/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      url
      ingredients {
        id
        recipeID
        listID
        quantity
        unit
        ingredient
        minQty
        maxQty
        expires
        status
      }
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        status
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getItemList = /* GraphQL */ `
  query GetItemList($id: ID!) {
    getItemList(id: $id) {
      id
      title
      pantryDetails {
        order
      }
      shoppingDetails {
        order
      }
      type
      order
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listItemLists = /* GraphQL */ `
  query ListItemLists(
    $filter: ModelItemListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItemLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        type
        order
        createdAt
        updatedAt
        shoppingDetails {
          ingredients {
            quantity
            unit
            ingredient
          }
        }
        owner
      }
      nextToken
    }
  }
`;
