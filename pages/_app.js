import "../styles/globals.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import awsconfig from "../src/aws-exports";
import { UserProvider } from '../src/user-context';
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default withAuthenticator(MyApp);
