import { createGlobalStyle, css } from 'styled-components';
import { Breakpoints } from './breakpoint';
import { ThemeType } from './theme';

import 'assets/fonts/Jost/fontface.module.css';


const fallbackFontFamily = '"-apple-system", "BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", "Helvetica", sans-serif';


export const fontFamily = `Jost, ${fallbackFontFamily}`;


export enum FontWeight {
  regular = 400,
  semibold = 600,
  bold = 700
}

export const GlobalTypography = createGlobalStyle(({ theme }: { theme: ThemeType }) => css`
  body,
  p {
    font-family: ${fontFamily};
    font-weight: ${FontWeight.regular};
    font-size: 20px;

    @media (min-width: ${Breakpoints.medium}) {
      font-size: 16px;
    }
  }

  h1 {
    font-weight: ${FontWeight.bold};
    font-size: 48px;

    @media (min-width: ${Breakpoints.medium}) {
      font-size: 28px;
    }
  }

  h2 {
    font-weight: ${FontWeight.bold};
    font-size: 24px;

    @media (min-width: ${Breakpoints.medium}) {
      font-size: 20px;
    }
  }

  a {
    background: ${theme.colors.purple_text_1};
    color: ${theme.colors.mito_purple_1};
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    padding: 0 4px 0 6px;
    position: relative;
    text-decoration: none;
    transition: all 300ms ease;
    z-index: 1;

    &::before {
      background: ${theme.colors.mito_purple_1};
      bottom: -2px;
      content: "";
      height: 2px;
      left: 0;
      position: absolute;
      transition: height 100ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      width: 100%;
      z-index: -1;
    }

    &:hover {
      color: ${theme.colors.purple_text_1};
    }

    &:focus::before,
    &:hover::before {
      height: calc(100% + 6px);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${theme.colors.mito_purple_1};
      border-radius: 4px;
    }
  }
`);
