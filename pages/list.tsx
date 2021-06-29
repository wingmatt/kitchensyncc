import Layout from "../components/Layout";
import ItemGroup from "../components/ItemGroup";
import ShoppingListItem from "../components/ListItem/ShoppingListItem";
import FloatingButton from "../components/FloatingButton";
import NewItemList from "../components/NewItemList";
import WaitUntilUserData from "../components/ItemListFeed"

export default function List() {  
  return (
    <Layout title="Shopping List">
      <ItemGroup title="Produce">
        <ShoppingListItem quantity="1" unit="cup" ingredient="sugar" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="sour cream" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Saffron" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Salt" />
      </ItemGroup>
      <ItemGroup title="Spices">
        <ShoppingListItem quantity="1" unit="cup" ingredient="sugar" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="sour cream" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Saffron" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Salt" />
      </ItemGroup>
      <ItemGroup title="Meat">
        <ShoppingListItem quantity="1" unit="cup" ingredient="sugar" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="sour cream" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Saffron" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Salt" />
      </ItemGroup>
      <ItemGroup title="Dairy">
        <ShoppingListItem quantity="1" unit="cup" ingredient="sugar" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="sour cream" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Saffron" />
        <ShoppingListItem quantity="1" unit="cup" ingredient="Salt" />
      </ItemGroup>
      <h2>Real Data</h2>
      <WaitUntilUserData/>
      <h2>Add a New List</h2>
      <NewItemList />
      <div className="floating-button-container">
        <FloatingButton action="editShoppingList" />
        <FloatingButton action="updateShoppingList" />
      </div>
    </Layout>
  );
}
