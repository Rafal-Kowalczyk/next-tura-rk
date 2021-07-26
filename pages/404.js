import Head from "next/head";
import ErrorPage from "../components/404page/error-page";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 page</title>
      </Head>
      <ErrorPage />
    </>
  );
}
