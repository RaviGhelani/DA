import Head from "next/head";
import { Fragment } from "react";
import Header from "../Components/HomePage/Header";
import Intro from "../Components/HomePage/Intro";
import Footer from "../Components/HomePage/Footer";
import SignUp from "../Components/HomePage/Signup";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Dragon Arena</title>
        <link rel="icon" href="/logo.png" />
      </Head> 
      <main>
        <Header />
        <Intro />
        <SignUp />
        <Footer />
      </main>
    </Fragment>
  );
}
