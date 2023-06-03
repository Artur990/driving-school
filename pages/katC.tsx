import Head from "next/head";
import { FC } from "react";
import Registration from "@/components/Registration";

const index: FC = () => {
  return (
    <>
      <Head>
        <title>Szkoła jazdy Strażak - KatC prawojazdy na ciężarówki </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <h1 className="text-2xl">W trakcie realizacji...</h1>
      <Registration />
    </>
  );
};

export default index;