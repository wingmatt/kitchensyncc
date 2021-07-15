import ShoppingListItem from "./ShoppingListItem";
import PantryItem from "./PantryItem"

const Item = (props) => {
  switch (props.type) {
    case 'shoppingDetails':
      return <ShoppingListItem quantity={props.quantity} unit={props.unit} ingredient={props.ingredient} status={props.status}/>
    case 'pantryDetails':
      return <PantryItem quantity={props.quantity} unit={props.unit} ingredient={props.ingredient} status={props.status}/>
  }
}

export default Item