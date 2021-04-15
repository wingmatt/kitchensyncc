import Layout from '../components/Layout'
import IngredientList from '../components/IngredientList'
import Ingredient from '../components/Ingredient'

export default function Pantry(){
  return (
    <Layout title="Pantry">
      <ul>
        <Ingredient>Pantry stuff!</Ingredient>
      </ul>
    </Layout>
  )
}