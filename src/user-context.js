import * as React from 'react'
import {Auth} from 'aws-amplify'

const UserContext = React.createContext({});

function userDataReducer (state, action) {
  switch (action.type) {
    case 'setUserData':
      return {user: action.payload, loading: false, ...state}
    case 'addPantryItem':
    case 'editPantryItem':
    case 'removePantryItem':
    case 'movePantryItemToShoppingList':
    case 'addShoppingListItem':
    case 'editShoppingListItem':
    case 'removeShoppingListItem':
    case 'moveShoppingListItemToPantry':
    case 'addRecipe':
    case 'editRecipe':
    case 'removeRecipe':
    case 'addRecipeToShoppingList':
  }
}

const getUserData = async ()=>{
  const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
  if (currentAuthenticatedUser) {
    const {sub: id} = currentAuthenticatedUser.attributes
    return {id}
  } else return null;
}

function UserProvider({children}) {
  const [state, dispatch] = React.useReducer(userDataReducer, {
    loading: true
  })
  const value = {state, dispatch}
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )

}

export { UserProvider }