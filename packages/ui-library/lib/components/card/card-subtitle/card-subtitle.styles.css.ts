import { style } from '@vanilla-extract/css';
import { FIAP_DS_TYPOGRAPHY } from '../../../design-tokens/typography';

const cardSubTitle = style({
  fontSize: FIAP_DS_TYPOGRAPHY.p['font-size'],
  lineHeight: FIAP_DS_TYPOGRAPHY.p['line-height'],
  fontWeight: FIAP_DS_TYPOGRAPHY.p.weight,
  margin: 0,
});

export { cardSubTitle };
