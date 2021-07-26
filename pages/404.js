import Head from "next/head";
import ErrorPage from "../components/404-page/error-page";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 error</title>
      </Head>
      <ErrorPage />
    </>
  );
}
