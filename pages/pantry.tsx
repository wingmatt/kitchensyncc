import Layout from '../components/Layout'
import IngredientList from '../components/IngredientList'
import Ingredient from '../components/Ingredient'

export default function Pantry(){
  return (
    <Layout title="Pantry">
      <ul className="content-list">
        <Ingredient quantity="1" unit="cup" ingredient="sugar" status="ok" type="pantry"/>
        <Ingredient quantity="1" unit="cup" ingredient="sour cream" status="warning" type="pantry"/>
        <Ingredient quantity="1" unit="cup" ingredient="Saffron" status="critical" type="pantry"/>
        <Ingredient quantity="1" unit="cup" ingredient="Salt" type="pantry"/>
      </ul>
    </Layout>
  )
}