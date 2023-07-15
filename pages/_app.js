import "../styles/globals.css";
import Head from "next/head";
import { Fragment } from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { ToastContainer } from 'react-toastify';
import "simplebar-react/dist/simplebar.min.css";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Fragment>
      <Head>
        <title>Dragon Arena</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
      <ToastContainer />
    </Fragment>
  );
}
