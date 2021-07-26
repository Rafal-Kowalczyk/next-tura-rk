import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
${normalize}

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Rubik', sans-serif;
    color: ${theme.colors.text};
  }

  h1 {
    font-size: 5rem;
    text-transform: uppercase;
  }

  a {
    color: ${theme.colors.text};
    text-decoration: none;

    &:hover {
      color: ${theme.colors.icon};
      font-weight: 500;
      border-bottom: 1px solid ${theme.colors.icon};
    }
  }
`;

export default GlobalStyle;
