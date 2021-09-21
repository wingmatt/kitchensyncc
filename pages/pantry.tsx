import Layout from '../components/Layout'
import AddToPantry from '../components/FloatingButton/AddToPantry'
import ItemListFeed from "../components/ItemListFeed"

export default function Pantry(){
  return (
    <Layout title="Pantry">
      <ItemListFeed type="pantryDetails"/>
      <div className="floating-button-container">
        <AddToPantry />
      </div>
    </Layout>
  )
}