import Head from "next/head";
import { Fragment } from "react";
import Header from "../Components/Header";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Dragon Arena</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
      </main>
    </Fragment>
  );
}
