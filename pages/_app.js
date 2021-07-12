import { createGlobalStyle, ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
