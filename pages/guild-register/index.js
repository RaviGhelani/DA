import Head from "next/head";
import { Fragment } from "react";
// import GuildSignUp from "../../Components/GuildPage/Guildsignup";
import GuildRegister from "../../Components/GuildPage/GuildRegister";

export default function Home() {
  return (
    <Fragment>
      <main>
        <GuildRegister />
      </main>
    </Fragment>
  );
}
