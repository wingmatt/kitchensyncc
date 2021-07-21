import ShoppingListItem from "./ShoppingListItem";
import PantryItem from "./PantryItem"

const Item = (props) => {
  switch (props.type) {
    case 'shoppingDetails':
      return <ShoppingListItem quantity={props.quantity} unit={props.unit} ingredient={props.ingredient} status={props.status} key={props.index} index={props.index} itemListId = {props.itemListId}/>
    case 'pantryDetails':
      return <PantryItem quantity={props.quantity} unit={props.unit} ingredient={props.ingredient} status={props.status} key={props.index} index={props.index} itemListId = {props.itemListId}/>
  }
}

export default Item