import { useRouter } from "next/router";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaGitAlt } from "react-icons/fa";

import { FooterWrap, FooterUl, FooterLi, FooterScroll } from "./footer.style";

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
      {/* <FooterScroll>
        {router.pathname === "/" && <span>scroll ---</span>}
        {router.pathname === "/projects" && <span>--- scroll ---</span>}
        {router.pathname === "/contact" && <span>--- scroll</span>}
      </FooterScroll> */}
    </FooterWrap>
  );
}

export default Footer;
