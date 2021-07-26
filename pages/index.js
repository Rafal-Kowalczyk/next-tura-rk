import Head from "next/head";

import Seo from "../components/seo";

export default function Home({ children }) {
  return (
    <>
      <Head>
        <title>Next Page Tura-RK</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Seo title={"Next landong page v2 - RK"} />
      {children}
    </>
  );
}
