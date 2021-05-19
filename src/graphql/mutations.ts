/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
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
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
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
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
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
export const createItemList = /* GraphQL */ `
  mutation CreateItemList(
    $input: CreateItemListInput!
    $condition: ModelItemListConditionInput
  ) {
    createItemList(input: $input, condition: $condition) {
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
export const updateItemList = /* GraphQL */ `
  mutation UpdateItemList(
    $input: UpdateItemListInput!
    $condition: ModelItemListConditionInput
  ) {
    updateItemList(input: $input, condition: $condition) {
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
export const deleteItemList = /* GraphQL */ `
  mutation DeleteItemList(
    $input: DeleteItemListInput!
    $condition: ModelItemListConditionInput
  ) {
    deleteItemList(input: $input, condition: $condition) {
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
