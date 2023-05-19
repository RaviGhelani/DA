import "../styles/globals.css";
// import { Provider } from "react-redux";
// import store from "../../store";
import Head from "next/head";
import { Fragment } from "react";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    // <Provider store={store}>
    <Fragment>
      <Head>
        <title>Dragon Arena</title>
        <link rel="icon" href="/Group 162.png" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </Fragment>
    // </Provider>
  );
}
