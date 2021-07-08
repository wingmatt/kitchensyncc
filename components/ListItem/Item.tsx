import ShoppingListItem from "./ShoppingListItem";

const Item = (props) => {
  if (props.type == 'shoppingDetails') {
    return <ShoppingListItem quantity={props.quantity} unit={props.unit} ingredient={props.ingredient} status={props.status}/>
  }
}

export default Item