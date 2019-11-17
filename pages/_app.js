import { createContext } from "react";
import Head from "next/head";
import { StateProvider } from "../src/state";

const App = ({ Component, pageProps }) => {
  return (
    <StateProvider>
      <div className="app">
        <Head>
          <title>Karl</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap"
          />
        </Head>
        <Component {...pageProps} />
        <style global jsx>{`
          body {
            font-family: Poppins;
            margin: 0;
            background-image: url("/background.png");
            background-size: cover;
          }
          .app {
            background-color: rgba(255, 255, 255, 0.5);
          }
        `}</style>
      </div>
    </StateProvider>
  );
};

export default App;
