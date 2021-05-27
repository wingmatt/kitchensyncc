export const UserContext = createContext({});

function userDataReducer (state, action) {
  switch (action.type) {
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

export default function Layout({ children, title = "Kitchen Syncc" }) {
  
  const [userData, setUserData] = useState(null);
  const [loading,setLoading]=useState(false);

  const getUserData = async ()=>{
    setLoading(true)
    const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
    const {sub: id} = currentAuthenticatedUser.attributes
    setUserData({id})
    setLoading(false)
  }

  useEffect(()=> {
    getUserData()
  },[])