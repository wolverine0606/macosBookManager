import {createTheme, useTheme} from '@shopify/restyle';
import {COLOR_PALETTE} from './colors';

const darkTheme = createTheme({
  colors: {
    borderColor: COLOR_PALETTE.blue[80],
    mainBackground: COLOR_PALETTE.blue[100],
    cardBackground: COLOR_PALETTE.blue[50],
    inputBackground: COLOR_PALETTE.blue[20],
    darkText: COLOR_PALETTE.darkText,
    lightText: COLOR_PALETTE.lightText,
    grayText: COLOR_PALETTE.grayText,
  },
  spacing: {
    zero: 0,
    xs: 4,
    s: 8,
    sm: 12,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  borderRadii: {
    zero: 0,
    xs: 2,
    s: 4,
    sm: 6,
    m: 8,
    l: 12,
    xl: 16,
    xxl: 24,
    xxxl: 32,
  },
  fontSize: {
    s: 8,
    sm: 14,
    m: 18,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  otherSizes: {
    xxxxxs: 1,
  },
});

export const useAppTheme = () => {
  return useTheme<AppTheme>();
};

export type AppTheme = typeof darkTheme;
export {darkTheme};
