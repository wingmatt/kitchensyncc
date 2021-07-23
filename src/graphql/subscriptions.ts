/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe($owner: String!) {
    onCreateRecipe(owner: $owner) {
      id
      url
      ingredients {
        id
        quantity
        unit
        ingredient
        minQty
        maxQty
        expires
        status
        checked
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
        id
        quantity
        unit
        ingredient
        minQty
        maxQty
        expires
        status
        checked
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
        id
        quantity
        unit
        ingredient
        minQty
        maxQty
        expires
        status
        checked
      }
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
      pantryDetails {
        order
      }
      shoppingDetails {
        order
      }
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
      pantryDetails {
        order
      }
      shoppingDetails {
        order
      }
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
      pantryDetails {
        order
      }
      shoppingDetails {
        order
      }
      order
      createdAt
      updatedAt
      owner
    }
  }
`;
