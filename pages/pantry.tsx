import Layout from '../components/Layout'
import IngredientList from '../components/IngredientList'
import Ingredient from '../components/Ingredient'

export default function Pantry(){
  return (
    <Layout title="Pantry">
      <ul className="content-list">
        <Ingredient quantity="1" unit="cup" ingredient="sugar" status="ok"/>
        <Ingredient quantity="1" unit="cup" ingredient="Salt" status="warning"/>
        <Ingredient quantity="1" unit="cup" ingredient="Saffron" status="critical"/>

      </ul>
    </Layout>
  )
}