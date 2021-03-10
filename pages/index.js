import Head from 'next/head'
import styles from '../styles/Home.module.css'
import GetRecipe from '../components/GetRecipe'

export default function Home() {
  return (
    <div className="{styles.container}">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Kitchen Syncc</a>
        </h1>
        <h2>Track your shopping list and pantry</h2>
        <p>I'm building this app to have an easy way to keep track of my kitchen supplies. Still in the early stages!</p>
        <h2>Import recipe ingredients from recipe websites</h2>
        <p>Plug a URL in the form below. This app will tell you what you have and add what you need to your shopping list.</p>
        <GetRecipe/>
        <h2>Big To-dos</h2>
        <ul>
          <li>Get Recipe Form working</li>
          <li>Parse recipe data into useable format</li>
          <li>Build general interface layout</li>
          <li>Connect to persistent database</li>
          <li>Add authentication & user-specific data</li>
          <li>Add Pantry - Show which recipe ingredients we already have</li>
          <li>Add Shopping List - Add missing recipe ingredients to list in 1 click</li>
          <li>Add Menu - Saved parsed recipe links for easy access</li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://wingmatt.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Matt Wing @WingMattDev
        </a>
      </footer>
    </div>
  )
}
