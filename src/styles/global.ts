import { createGlobalStyle, css } from 'styled-components';
import { ThemeType } from 'styles/theme';
export const GlobalStyle = createGlobalStyle(({ theme }: { theme: ThemeType }) => css`
  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  html {
    background-color: ${theme.colors.background};
    box-sizing: border-box;
    margin: 0;
    max-width: 100vw;
    padding: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    max-width: 100vw;
    background-color: ${theme.colors.background};
    color: ${theme.colors.white};
  }

  div {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }

  ::selection {
    text-shadow: none;
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    position: relative;
    min-height: 100%;
  }

  #gatsby-focus-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
`);
