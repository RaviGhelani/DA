import Head from "next/head";
import { Fragment } from "react";
import UserLogIn from "../../Components/User/UserLogIn";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Dragon Arena</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <UserLogIn />
      </main>
    </Fragment>
  );
}
