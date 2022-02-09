import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { GlobalTypography } from 'styles/typography';
import { theme } from 'styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalTypography />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}