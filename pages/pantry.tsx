import Layout from '../components/Layout'
import PantryIngredient from '../components/PantryIngredient'

export default function Pantry(){
  return (
    <Layout title="Pantry">
      <ul className="content-list">
        <PantryIngredient quantity="1" unit="cup" ingredient="sugar" status="ok"/>
        <PantryIngredient quantity="1" unit="cup" ingredient="sour cream" status="warning"/>
        <PantryIngredient quantity="1" unit="cup" ingredient="Saffron" status="critical"/>
        <PantryIngredient quantity="1" unit="cup" ingredient="Salt"/>
      </ul>
    </Layout>
  )
}