/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
      id
      url
      ingredients {
        nextToken
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
export const getIngredient = /* GraphQL */ `
  query GetIngredient($id: ID!) {
    getIngredient(id: $id) {
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listIngredients = /* GraphQL */ `
  query ListIngredients(
    $filter: ModelIngredientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIngredients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      ingredients {
        nextToken
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
        owner
      }
      nextToken
    }
  }
`;
