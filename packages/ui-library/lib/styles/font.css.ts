import { globalFontFace, style } from '@vanilla-extract/css';

const defaultFont = 'Roboto';

globalFontFace(defaultFont, {
  fontStyle: 'normal',
  fontWeight: '100 900',
  fontStretch: '100%',
  fontDisplay: 'swap',
  src: "url(https://fonts.gstatic.com/s/roboto/v47/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBHMdazQ.woff2) format('woff2')",
});

export const fontText = style({
  fontFamily: defaultFont,
});
