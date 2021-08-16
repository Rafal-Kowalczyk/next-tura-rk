import Head from "next/head";

import Seo from "../components/seo";
import HomePage from "../components/home-page/home-page";

export default function Home({ children }) {
  return (
    <>
      <Head>
        <title>Next Page Tura-RK</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Seo title={"Next js landing page v2 - RK"} />
      <HomePage />
      {children}
    </>
  );
}
