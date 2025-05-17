import { style } from '@vanilla-extract/css';
import { FIAP_DS_TYPOGRAPHY } from '../../../design-tokens/typography';

const cardTitle = style({
  margin: 0,
  fontSize: FIAP_DS_TYPOGRAPHY.h3['font-size'],
  lineHeight: FIAP_DS_TYPOGRAPHY.h3['line-height'],
  fontWeight: FIAP_DS_TYPOGRAPHY.h3.weight,
});

export { cardTitle };
