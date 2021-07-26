import React from "react";

import Header from ".././header/header";
import Footer from "../footer/footer";
import { PageWrap } from "./layout.style";

function Layout({ children }) {
  return (
    <>
      <PageWrap>
        <Header />
        {children}
        <Footer />
      </PageWrap>
    </>
  );
}

export default Layout;
