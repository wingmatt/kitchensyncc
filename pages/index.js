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
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <GetRecipe/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://wingmatt.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Gumption
        </a>
      </footer>
    </div>
  )
}
