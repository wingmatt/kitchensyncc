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
      <h1 className={styles.title}>
          <a href="/">{title}</a>
      </h1>
      <Menu/>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
}
