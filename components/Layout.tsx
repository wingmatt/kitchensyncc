import Head from "next/head";
import Menu from "./Menu"
import styles from "../styles/Home.module.css";

import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";

import { Auth } from "aws-amplify";
import { createContext, useState, useEffect } from "react";

export default function Layout({ children, title = "Kitchen Syncc" }) {
  const UserContext = createContext({});
  const [userData, setUserData] = useState(null);
  const [loading,setLoading]=useState(false);

  const getUserData = async ()=>{
    setLoading(true)
    const currentAuthenticatedUser = await Auth.currentAuthenticatedUser();
    const {sub: id} = currentAuthenticatedUser.attributes
    setUserData({id})
    setLoading(false)
  }

  useEffect(()=> {
    getUserData()
  },[])

  return (
    <UserContext.Provider value={{loading, user: userData}}>
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SkipNavLink/>
        <h1 className={styles.title}>
            <a href="/">{title}</a>
        </h1>
        <Menu/>
        <main className={styles.main}>
          <SkipNavContent/>
          {children}
        </main>
      </div>
    </UserContext.Provider>
  );
}
