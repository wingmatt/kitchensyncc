import * as React from "react";
import { Auth } from "aws-amplify";

const UserContext = React.createContext({});

// Custom hook for accessing
function usePantry() {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      switch (action.type) {
        case "setUserData":
          return {
            ...state,
            user: action.payload,
            loading: false,
          };
        case "ADD_ITEM_LIST":
          return {
            ...state,
            itemLists: [
              ...state.itemLists,
              action.payload
            ]
          }
          case "ADD_ITEM_LISTS":
          return {
            ...state,
            itemLists: [
              ...state.itemLists,
              ...action.payload
            ]
          }
        case "addPantryItem":
          return {
            ...state,
            itemLists: [...state]
          };
        case "editPantryItem":
        case "removePantryItem":
        case "movePantryItemToShoppingList":
        case "addShoppingListItem":
        case "editShoppingListItem":
        case "removeShoppingListItem":
        case "moveShoppingListItemToPantry":
        case "addRecipe":
        case "editRecipe":
        case "removeRecipe":
        case "addRecipeToShoppingList":
      }
    },
    {
      loading: true,
      user: null,
      itemLists: []
    }
  );
  return [state, dispatch];
}

const getUserData = async () => {
  const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
  if (currentAuthenticatedUser) {
    const { sub: id } = currentAuthenticatedUser.attributes;
    return { id };
  } else return null;
};

function UserProvider({ children }) {
  const [state, dispatch] = React.useReducer(userDataReducer, {
    loading: true,
  });
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { usePantry, UserProvider };
