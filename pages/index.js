import styles from '../styles/Home.module.css'
import RecipeSearch from '../components/RecipeSearch'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <h2>Track your shopping list and pantry</h2>
        <p>I'm building this app to have an easy way to keep track of my kitchen supplies. Still in the early stages!</p>
        <h2>Import recipe ingredients from recipe websites</h2>
        <p>Plug a URL in the form below. This app will tell you what you have and add what you need to your shopping list.</p>
        <RecipeSearch/>
        <h2>Big To-dos</h2>
        <ul className={styles.todos}>
          <li className={styles.done}>Get Recipe Form working</li>
          <li className={styles.done}>Parse recipe data into useable format</li>
          <li className={styles.current}>Build general interface layout</li>
          <ul>
            <li className={styles.done}>Ingredient list component(s)</li>
            <li className={styles.done}>Recipe card component</li>
            <li className={styles.done}>Floating button component</li>
            <li>Pantry Ingredient Inputs</li>
            <li>Search box component</li>
          </ul>
          <li className={styles.done}>Connect to persistent database</li>
          <li className={styles.done}>Add authentication &amp; user-specific data</li>
          <li>Add Pantry - Show which recipe ingredients we already have</li>
          <ul>
            <li>Context menu for Pantry ingredients</li>
            <li>Pantry expiration date indicator</li>
          </ul>
          <li>Add Shopping List - Add missing recipe ingredients to list in 1 click</li>
          <ul>
            <li>Context menu for List ingredients</li>
            <li>Ability to rearrage list categories</li>
          </ul>
          <li>Add Recipes - Saved parsed recipe links for easy access</li>
          <ul>
            <li>Weekly plan component?</li>
          </ul>
        </ul>
    </Layout>
  )
}
