import Head from "next/head";
import { Fragment } from "react";
import UserRegister from "../../Components/User/UserRegister";


export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Dragon Arena</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <UserRegister />
      </main>
    </Fragment>
  );
}
