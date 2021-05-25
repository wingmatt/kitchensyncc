import "../styles/globals.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsconfig from "../src/aws-exports";
import {createContext, useState, useEffect} from 'react'
Amplify.configure(awsconfig);

export const UserContext = createContext({});

function MyApp({ Component, pageProps }) {
  const [userData, setUserData] = useState(null);
  const [loading,setLoading]=useState(false);

  const getUserData = async ()=>{
    setLoading(true)
    const currentAuthenticatedUser = await Amplify.Auth.currentAuthenticatedUser();
    const {sub: id} = currentAuthenticatedUser.attributes
    setUserData({id})
    setLoading(false)
  }

  useEffect(()=> {
    getUserData()
  },[])
  return (
    <UserContext.Provider value={{loading, user: userData}}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default withAuthenticator(MyApp);
