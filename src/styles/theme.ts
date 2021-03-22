import { fontFamily } from './typography';
import * as colors from './colors';

export type ThemeType = typeof theme;

export const theme = {
  colors: {
    ...colors
  },
  types: {
    fontFamily
  },
};
