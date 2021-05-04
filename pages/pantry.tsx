import Layout from '../components/Layout'
import ItemGroup from '../components/ItemGroup'
import PantryItem from '../components/ListItem/PantryItem'
import AddToPantry from '../components/FloatingButton/AddToPantry'

export default function Pantry(){
  return (
    <Layout title="Pantry">
      <ItemGroup title="Produce">
        <PantryItem quantity="1" unit="cup" ingredient="sugar" status="ok"/>
        <PantryItem quantity="1" unit="cup" ingredient="sour cream" status="warning"/>
        <PantryItem quantity="1" unit="cup" ingredient="Saffron" status="critical"/>
        <PantryItem quantity="1" unit="cup" ingredient="Salt"/>
      </ItemGroup>
      <div className="floating-button-container">
        <AddToPantry />
      </div>
    </Layout>
  )
}