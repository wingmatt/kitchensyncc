import * as React from "react";
import { Auth } from "aws-amplify";

const UserContext = React.createContext();

function userDataReducer (state, action) {
  switch(action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case "ADD_ITEM_LIST":
      return {
        ...state,
        itemLists: [
          ...state.itemLists,
          action.payload
        ]
      }
    case "SET_ITEM_LISTS":
      return {
        ...state,
        itemLists: [
          ...action.payload
        ]
      }
    case "UPDATE_ITEM_LIST":
      const listToUpdate = state.itemLists.find(list => list.id === action.payload.id)
      listToUpdate[action.payload.type].ingredients = action.payload[action.payload.type].ingredients;
      return {
        ...state,
        itemLists: state.itemLists
      }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = React.useReducer(userDataReducer, {
    loading: true,
    user: null,
    itemLists: []
  });
  React.useEffect(()=> {
    getUserData()
  },[])
  const getUserData = async () => {
    const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
    if (currentAuthenticatedUser) {
      const { sub: id } = currentAuthenticatedUser.attributes;
      dispatch({type: "SET_USER_DATA", payload: id} )
    } else dispatch({type: "SET_USER_DATA", payload: null} )
  };
  const value = { state, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function usePantry() {
  const context = React.useContext(UserContext)
  if (context === undefined) {
    throw new Error('usePantry must be used within a UserProvider')
  }
  return context
}

export { UserProvider, usePantry };
