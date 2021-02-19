import Head from "next/head";
import UserProvider from "../context/UserContext";
import GlobalStyle from "../styles/global";

const MyApp = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Head>
        <title>Login App</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </UserProvider>
  );
};

export default MyApp;
