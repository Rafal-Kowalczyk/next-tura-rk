import styled from "styled-components";
import Link from "next/link";
import theme from "../../styles/theme";

export default function ErrorPage() {
  return (
    <ErrorWrap>
      <ErrorContent>404 - Page Not Found</ErrorContent>
      <ErrorBack>
        <Link href="/">
          <a>Back to home page</a>
        </Link>
      </ErrorBack>
    </ErrorWrap>
  );
}

export const ErrorWrap = styled.div`
  text-align: center;
`;
export const ErrorContent = styled.h1`
  font-size: 3rem;

  @media ${theme.devices.tablet} {
    font-size: 4rem;
  }
`;
export const ErrorBack = styled.p`
  font-size: 1.5rem;
`;
