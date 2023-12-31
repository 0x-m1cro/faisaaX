import { Colors } from './types'

export const baseColors = {
  failure: '#ED4B9E',
  primary: '#00107f',
  primaryBright: '#e6e7f2',
  primaryDark: '#000840',
  secondary: '#e6e7f2',
  success: '#00107f',
  warning: '#FFB237',
}

export const additionalColors = {
  binance: '#F0B90B',
  overlay: '#452a7a',
  gold: '#FFC700',
  silver: '#B2B2B2',
  bronze: '#E7974D',
}

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: '#000840',
  backgroundDisabled: '#000526',
  backgroundAlt: '#000840',
  backgroundAlt2: '#000526',
  cardBorder: '#00107f',
  contrast: '#191326',
  dropdown: '#000840',
  dropdownDeep: '#00107f',
  invertedContrast: '#000840',
  input: '#00107f',
  inputSecondary: '#00107f',
  tertiary: '#00107f',
  text: '#e6e7f2',
  textDisabled: '#e6e7f2',
  textSubtle: '#e6e7f2',
  disabled: '#00107f',
  gradients: {
    bubblegum: 'linear-gradient(180deg, #000840 -34.7%, #00107f 79.3%)',
    inverseBubblegum: 'linear-gradient(139.73deg, #00107f 0%, #000840 100%)',
    cardHeader: 'linear-gradient(111.68deg, #00107f 0%, #000840 100%)',
    blue: 'linear-gradient(180deg, #000840 0%, #00107f 100%)',
    violet: 'linear-gradient(180deg, #000840 0%, #00107f 100%)',
    violetAlt: 'linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)',
    gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
  },
  toggle: '#1a288c',
}

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: '#e6e7f2',
  background: '#000840',
  backgroundDisabled: '#000840',
  backgroundAlt: '#00107f',
  backgroundAlt2: '#000840',
  cardBorder: '#000840',
  contrast: '#FFFFFF',
  dropdown: '#1E1D20',
  dropdownDeep: '#100C18',
  invertedContrast: '#191326',
  input: '#00107f',
  inputSecondary: '#262130',
  primaryDark: '#00107f',
  tertiary: '#353547',
  text: '#e6e7f2',
  textDisabled: '#666171',
  textSubtle: '#e6e7f2',
  disabled: '#000840',
  gradients: {
    bubblegum: 'linear-gradient(180deg, #E3CCCB -34.7%, #F9F1EA 79.3%)',
    inverseBubblegum: 'linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)',
    cardHeader: 'linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)',
    blue: 'linear-gradient(180deg, #00707F 0%, #19778C 100%)',
    violet: 'linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)',
    violetAlt: 'linear-gradient(180deg, #434575 0%, #66578D 100%)',
    gold: 'linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)',
  },
  toggle: '#756072',
}
