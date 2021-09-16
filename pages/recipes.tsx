import Layout from '../components/Layout'
import RecipeSearch from '../components/RecipeSearch'
import Recipe from '../components/ListItem/Recipe'
import SearchRecipes from '../components/FloatingButton/SearchRecipes'
import ClipRecipe from '../components/FloatingButton/ClipRecipe'
import styles from "../styles/components/Recipe.module.css"

export default function Pantry(){
  const demoIngredients= [
    {id: "1", quantity: "1", unit: "thing", ingredient: "falafel ingredients", minQty: "1", maxQty: "2"},
]
  return (
    <Layout title="Recipes">
      <ul className={styles.list}>
        <Recipe name="Waffle" url="https://www.seriouseats.com/recipes/2016/03/the-food-lab-vegan-experience-best-homemade-falafel-recipe.html" ingredients={demoIngredients} status="ok"/>
        <Recipe name="Offal" url="https://www.seriouseats.com/recipes/2016/03/the-food-lab-vegan-experience-best-homemade-falafel-recipe.html" ingredients={demoIngredients} />
        <Recipe name="Falafel" url="https://www.seriouseats.com/recipes/2016/03/the-food-lab-vegan-experience-best-homemade-falafel-recipe.html" ingredients={demoIngredients} />
      </ul>
      <RecipeSearch/>
      <div className="floating-button-container">
        <SearchRecipes />
        <ClipRecipe />
      </div>
    </Layout>
  )
}