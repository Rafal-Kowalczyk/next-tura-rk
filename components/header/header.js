import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { HeaderWrap, HeaderLogo, HeaderFlexBox } from "./header.style";

import logoImg from "../../public/images/rk-red-logo.svg";

function Header() {
  const router = useRouter();

  const handleClickLogo = () => {
    router.push("/");
  };

  return (
    <HeaderWrap>
      <HeaderLogo src={logoImg} alt="Logo" onClick={handleClickLogo} />
      <HeaderFlexBox>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </HeaderFlexBox>
    </HeaderWrap>
  );
}

export default Header;
