import Head from "next/head";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Login App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <h1 style={{ fontFamily: "Montserrat" }}>Olá mundo</h1>
      </main>
    </div>
  );
};

export default Home;
