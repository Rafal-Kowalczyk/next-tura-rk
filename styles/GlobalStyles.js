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
    font-size: 16px;
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
    transition: 0.25s;

    &:hover {
      color: ${theme.colors.icon};
      font-weight: 500;
      border-bottom: 1px solid ${theme.colors.icon};
    }
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none
  }

  // swiper styles

  .swiper-wrapper {
    height: 350px;

    @media(min-width: 576px) {
      height: 450px;
    }
  }
  .swiper-container {
    width: 100%;
    padding-top: 40px;
    padding-bottom:10px;

    @media(min-width: 768px) {
      padding-top: 100px;
      padding-bottom: 30px;
    }
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 200px;

    @media(min-width: 576px) {
      width:400px;
      height: 400px
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
  }
`;

export default GlobalStyle;
