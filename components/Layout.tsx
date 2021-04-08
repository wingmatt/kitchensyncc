import Head from "next/head";
import Menu from "./Menu"
import styles from "../styles/Home.module.css";

export default function Layout({ children, title = "Kitchen Syncc" }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">{title}</a>
        </h1>
        {children}
      </main>
      <Menu/>

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
  );
}
