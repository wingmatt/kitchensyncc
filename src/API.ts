/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRecipeInput = {
  id?: string | null,
  url?: string | null,
  ingredients?: Array< IngredientInput | null > | null,
  status?: string | null,
};

export type IngredientInput = {
  id: string,
  recipeID?: string | null,
  listID?: string | null,
  quantity?: string | null,
  unit?: string | null,
  ingredient: string,
  minQty?: string | null,
  maxQty?: string | null,
  expires?: string | null,
  status?: string | null,
};

export type ModelRecipeConditionInput = {
  url?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelRecipeConditionInput | null > | null,
  or?: Array< ModelRecipeConditionInput | null > | null,
  not?: ModelRecipeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Recipe = {
  __typename: "Recipe",
  id?: string,
  url?: string | null,
  ingredients?:  Array<Ingredient | null > | null,
  status?: string | null,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type Ingredient = {
  __typename: "Ingredient",
  id?: string,
  recipeID?: string | null,
  listID?: string | null,
  quantity?: string | null,
  unit?: string | null,
  ingredient?: string,
  minQty?: string | null,
  maxQty?: string | null,
  expires?: string | null,
  status?: string | null,
};

export type UpdateRecipeInput = {
  id: string,
  url?: string | null,
  ingredients?: Array< IngredientInput | null > | null,
  status?: string | null,
};

export type DeleteRecipeInput = {
  id?: string | null,
};

export type CreateItemListInput = {
  id?: string | null,
  title: string,
  pantryDetails?: PantryDetailsInput | null,
  shoppingDetails?: ShoppingDetailsInput | null,
  type: string,
  order?: number | null,
};

export type PantryDetailsInput = {
  ingredients?: Array< IngredientInput | null > | null,
  order?: number | null,
};

export type ShoppingDetailsInput = {
  ingredients?: Array< IngredientInput | null > | null,
  order?: number | null,
};

export type ModelItemListConditionInput = {
  title?: ModelStringInput | null,
  type?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelItemListConditionInput | null > | null,
  or?: Array< ModelItemListConditionInput | null > | null,
  not?: ModelItemListConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ItemList = {
  __typename: "ItemList",
  id?: string,
  title?: string,
  pantryDetails?: PantryDetails,
  shoppingDetails?: ShoppingDetails,
  type?: string,
  order?: number | null,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type PantryDetails = {
  __typename: "PantryDetails",
  ingredients?:  Array<Ingredient | null > | null,
  order?: number | null,
};

export type ShoppingDetails = {
  __typename: "ShoppingDetails",
  ingredients?:  Array<Ingredient | null > | null,
  order?: number | null,
};

export type UpdateItemListInput = {
  id: string,
  title?: string | null,
  pantryDetails?: PantryDetailsInput | null,
  shoppingDetails?: ShoppingDetailsInput | null,
  type?: string | null,
  order?: number | null,
};

export type DeleteItemListInput = {
  id?: string | null,
};

export type ModelRecipeFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelRecipeFilterInput | null > | null,
  or?: Array< ModelRecipeFilterInput | null > | null,
  not?: ModelRecipeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelRecipeConnection = {
  __typename: "ModelRecipeConnection",
  items?:  Array<Recipe | null > | null,
  nextToken?: string | null,
};

export type ModelItemListFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  type?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelItemListFilterInput | null > | null,
  or?: Array< ModelItemListFilterInput | null > | null,
  not?: ModelItemListFilterInput | null,
};

export type ModelItemListConnection = {
  __typename: "ModelItemListConnection",
  items?:  Array<ItemList | null > | null,
  nextToken?: string | null,
};

export type CreateRecipeMutationVariables = {
  input?: CreateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type CreateRecipeMutation = {
  createRecipe?:  {
    __typename: "Recipe",
    id: string,
    url?: string | null,
    ingredients?:  Array< {
      __typename: "Ingredient",
      id: string,
      recipeID?: string | null,
      listID?: string | null,
      quantity?: string | null,
      unit?: string | null,
      ingredient: string,
      minQty?: string | null,
      maxQty?: string | null,
      expires?: string | null,
      status?: string | null,
    } | null > | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateRecipeMutationVariables = {
  input?: UpdateRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type UpdateRecipeMutation = {
  updateRecipe?:  {
    __typename: "Recipe",
    id: string,
    url?: string | null,
    ingredients?:  Array< {
      __typename: "Ingredient",
      id: string,
      recipeID?: string | null,
      listID?: string | null,
      quantity?: string | null,
      unit?: string | null,
      ingredient: string,
      minQty?: string | null,
      maxQty?: string | null,
      expires?: string | null,
      status?: string | null,
    } | null > | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteRecipeMutationVariables = {
  input?: DeleteRecipeInput,
  condition?: ModelRecipeConditionInput | null,
};

export type DeleteRecipeMutation = {
  deleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    url?: string | null,
    ingredients?:  Array< {
      __typename: "Ingredient",
      id: string,
      recipeID?: string | null,
      listID?: string | null,
      quantity?: string | null,
      unit?: string | null,
      ingredient: string,
      minQty?: string | null,
      maxQty?: string | null,
      expires?: string | null,
      status?: string | null,
    } | null > | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateItemListMutationVariables = {
  input?: CreateItemListInput,
  condition?: ModelItemListConditionInput | null,
};

export type CreateItemListMutation = {
  createItemList?:  {
    __typename: "ItemList",
    id: string,
    title: string,
    pantryDetails?:  {
      __typename: "PantryDetails",
      order?: number | null,
    } | null,
    shoppingDetails?:  {
      __typename: "ShoppingDetails",
      order?: number | null,
    } | null,
    type: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateItemListMutationVariables = {
  input?: UpdateItemListInput,
  condition?: ModelItemListConditionInput | null,
};

export type UpdateItemListMutation = {
  updateItemList?:  {
    __typename: "ItemList",
    id: string,
    title: string,
    pantryDetails?:  {
      __typename: "PantryDetails",
      order?: number | null,
    } | null,
    shoppingDetails?:  {
      __typename: "ShoppingDetails",
      order?: number | null,
    } | null,
    type: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteItemListMutationVariables = {
  input?: DeleteItemListInput,
  condition?: ModelItemListConditionInput | null,
};

export type DeleteItemListMutation = {
  deleteItemList?:  {
    __typename: "ItemList",
    id: string,
    title: string,
    pantryDetails?:  {
      __typename: "PantryDetails",
      order?: number | null,
    } | null,
    shoppingDetails?:  {
      __typename: "ShoppingDetails",
      order?: number | null,
    } | null,
    type: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetRecipeQueryVariables = {
  id?: string,
};

export type GetRecipeQuery = {
  getRecipe?:  {
    __typename: "Recipe",
    id: string,
    url?: string | null,
    ingredients?:  Array< {
      __typename: "Ingredient",
      id: string,
      recipeID?: string | null,
      listID?: string | null,
      quantity?: string | null,
      unit?: string | null,
      ingredient: string,
      minQty?: string | null,
      maxQty?: string | null,
      expires?: string | null,
      status?: string | null,
    } | null > | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListRecipesQueryVariables = {
  filter?: ModelRecipeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecipesQuery = {
  listRecipes?:  {
    __typename: "ModelRecipeConnection",
    items?:  Array< {
      __typename: "Recipe",
      id: string,
      url?: string | null,
      status?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetItemListQueryVariables = {
  id?: string,
};

export type GetItemListQuery = {
  getItemList?:  {
    __typename: "ItemList",
    id: string,
    title: string,
    pantryDetails?:  {
      __typename: "PantryDetails",
      order?: number | null,
    } | null,
    shoppingDetails?:  {
      __typename: "ShoppingDetails",
      order?: number | null,
    } | null,
    type: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListItemListsQueryVariables = {
  filter?: ModelItemListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemListsQuery = {
  listItemLists?:  {
    __typename: "ModelItemListConnection",
    items?:  Array< {
      __typename: "ItemList",
      id: string,
      title: string,
      type: string,
      order?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateRecipeSubscriptionVariables = {
  owner?: string,
};

export type OnCreateRecipeSubscription = {
  onCreateRecipe?:  {
    __typename: "Recipe",
    id: string,
    url?: string | null,
    ingredients?:  Array< {
      __typename: "Ingredient",
      id: string,
      recipeID?: string | null,
      listID?: string | null,
      quantity?: string | null,
      unit?: string | null,
      ingredient: string,
      minQty?: string | null,
      maxQty?: string | null,
      expires?: string | null,
      status?: string | null,
    } | null > | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateRecipeSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateRecipeSubscription = {
  onUpdateRecipe?:  {
    __typename: "Recipe",
    id: string,
    url?: string | null,
    ingredients?:  Array< {
      __typename: "Ingredient",
      id: string,
      recipeID?: string | null,
      listID?: string | null,
      quantity?: string | null,
      unit?: string | null,
      ingredient: string,
      minQty?: string | null,
      maxQty?: string | null,
      expires?: string | null,
      status?: string | null,
    } | null > | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteRecipeSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteRecipeSubscription = {
  onDeleteRecipe?:  {
    __typename: "Recipe",
    id: string,
    url?: string | null,
    ingredients?:  Array< {
      __typename: "Ingredient",
      id: string,
      recipeID?: string | null,
      listID?: string | null,
      quantity?: string | null,
      unit?: string | null,
      ingredient: string,
      minQty?: string | null,
      maxQty?: string | null,
      expires?: string | null,
      status?: string | null,
    } | null > | null,
    status?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateItemListSubscriptionVariables = {
  owner?: string,
};

export type OnCreateItemListSubscription = {
  onCreateItemList?:  {
    __typename: "ItemList",
    id: string,
    title: string,
    pantryDetails?:  {
      __typename: "PantryDetails",
      order?: number | null,
    } | null,
    shoppingDetails?:  {
      __typename: "ShoppingDetails",
      order?: number | null,
    } | null,
    type: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateItemListSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateItemListSubscription = {
  onUpdateItemList?:  {
    __typename: "ItemList",
    id: string,
    title: string,
    pantryDetails?:  {
      __typename: "PantryDetails",
      order?: number | null,
    } | null,
    shoppingDetails?:  {
      __typename: "ShoppingDetails",
      order?: number | null,
    } | null,
    type: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteItemListSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteItemListSubscription = {
  onDeleteItemList?:  {
    __typename: "ItemList",
    id: string,
    title: string,
    pantryDetails?:  {
      __typename: "PantryDetails",
      order?: number | null,
    } | null,
    shoppingDetails?:  {
      __typename: "ShoppingDetails",
      order?: number | null,
    } | null,
    type: string,
    order?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
