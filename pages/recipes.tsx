import Layout from '../components/Layout'
import RecipeSearch from '../components/RecipeSearch'
import Recipe from '../components/Recipe'

export default function Pantry(){
  const demoIngredients= [{quantity: "1", unit: "thing", ingredient: "falafel ingredients", minQty: "1", maxQty: "2"}
]
  return (
    <Layout title="Recipes">
      <ul>
        <Recipe name="Falafel" url="https://www.seriouseats.com/recipes/2016/03/the-food-lab-vegan-experience-best-homemade-falafel-recipe.html" imgUrl="https://www.seriouseats.com/recipes/images/2016/03/20160323-falafel-recipe-20.jpg" ingredients={demoIngredients} />
      </ul>
      <RecipeSearch/>
    </Layout>
  )
}