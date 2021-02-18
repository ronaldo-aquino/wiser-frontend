import Head from "next/head";
import GlobalStyle from "../styles/global";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Login App</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default MyApp;
