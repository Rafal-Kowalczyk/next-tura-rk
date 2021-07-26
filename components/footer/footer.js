import { useRouter } from "next/router";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGitAlt } from "react-icons/fa";

import { FooterWrap, FooterUl, FooterLi, FooterNext } from "./footer.style";

function Footer() {
  const router = useRouter();

  console.log(router.pathname);
  return (
    <FooterWrap>
      <FooterUl>
        <FooterLi>
          <Link href="/">
            <a>
              <FaLinkedinIn />
            </a>
          </Link>
        </FooterLi>
        <FooterLi>
          <Link href="/">
            <a>
              <FaGitAlt />
            </a>
          </Link>
        </FooterLi>
        <FooterLi>
          <Link href="/">
            <a>
              <FaFacebookF />
            </a>
          </Link>
        </FooterLi>
      </FooterUl>
      <FooterNext>
        {router.pathname === "/" && (
          <Link href="/projects">
            <a>next page</a>
          </Link>
        )}
        {router.pathname === "/projects" && (
          <Link href="/contact">
            <a>next page</a>
          </Link>
        )}
        {router.pathname === "/contact" && (
          <Link href="/">
            <a>next page</a>
          </Link>
        )}
      </FooterNext>
    </FooterWrap>
  );
}

export default Footer;
