import Head from "next/head";
import { Fragment } from "react";
import UserLogIn from "../../Components/User/UserLogIn";

export default function Home() {
  return (
    <Fragment>
      <main>
        <UserLogIn />
      </main>
    </Fragment>
  );
}
