import React from "react";

import Header from ".././header/header";
import { PageWrap } from "./layout.style";

function Layout({ children }) {
  return (
    <>
      <PageWrap>
        <Header />
        {children}
        <p>footer</p>
      </PageWrap>
    </>
  );
}

export default Layout;
