import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';
import { FIAP_DS_TYPOGRAPHY } from '../design-tokens/typography';

export const theme = createGlobalTheme(':root', {
  fontFamily: FIAP_DS_TYPOGRAPHY.body['font-family'],
});

globalStyle('html, body', {
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
  fontFamily: theme.fontFamily,
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('input', {
  fontFamily: theme.fontFamily,
});
