/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe($owner: String!) {
    onCreateRecipe(owner: $owner) {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe($owner: String!) {
    onUpdateRecipe(owner: $owner) {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe($owner: String!) {
    onDeleteRecipe(owner: $owner) {
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
export const onCreateIngredient = /* GraphQL */ `
  subscription OnCreateIngredient($owner: String!) {
    onCreateIngredient(owner: $owner) {
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
export const onUpdateIngredient = /* GraphQL */ `
  subscription OnUpdateIngredient($owner: String!) {
    onUpdateIngredient(owner: $owner) {
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
export const onDeleteIngredient = /* GraphQL */ `
  subscription OnDeleteIngredient($owner: String!) {
    onDeleteIngredient(owner: $owner) {
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
export const onCreateItemList = /* GraphQL */ `
  subscription OnCreateItemList($owner: String!) {
    onCreateItemList(owner: $owner) {
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
export const onUpdateItemList = /* GraphQL */ `
  subscription OnUpdateItemList($owner: String!) {
    onUpdateItemList(owner: $owner) {
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
export const onDeleteItemList = /* GraphQL */ `
  subscription OnDeleteItemList($owner: String!) {
    onDeleteItemList(owner: $owner) {
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
