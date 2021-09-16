import Layout from "../components/Layout";
import FloatingButton from "../components/FloatingButton";
import NewItemList from "../components/NewItemList";
import ItemListFeed from "../components/ItemListFeed"
import UpdateShoppingList from "../components/FloatingButton/UpdateShoppingList";

export default function List() {  
  return (
    <Layout title="Shopping List">
      <ItemListFeed type="shoppingDetails"/>
      <h2>Add a New List</h2>
      <NewItemList />
      <div className="floating-button-container">
        <FloatingButton action="editShoppingList" />
        <UpdateShoppingList/>
      </div>
    </Layout>
  );
}
