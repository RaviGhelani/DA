import Head from "next/head";
import { Fragment } from "react";
import Header from "../Components/Header";
import Intro from "../Components/Intro";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Dragon Arena</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Intro />
      </main>
    </Fragment>
  );
}
