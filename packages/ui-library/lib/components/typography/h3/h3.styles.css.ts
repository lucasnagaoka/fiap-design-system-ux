import { style } from '@vanilla-extract/css';

import { FIAP_DS_COLORS } from '../../../design-tokens/colors';
import { FIAP_DS_TYPOGRAPHY } from '../../../design-tokens/typography';

const h3 = style({
  fontSize: FIAP_DS_TYPOGRAPHY.h3['font-size'],
  lineHeight: FIAP_DS_TYPOGRAPHY.h3['line-height'],
  fontWeight: FIAP_DS_TYPOGRAPHY.h3.weight,
  color: FIAP_DS_COLORS.black[100],
});

export { h3 };
