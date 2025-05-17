import { style } from '@vanilla-extract/css';

import { FIAP_DS_COLORS } from '../../../design-tokens/colors';
import { FIAP_DS_TYPOGRAPHY } from '../../../design-tokens/typography';

const paragraph = style({
  fontSize: FIAP_DS_TYPOGRAPHY.p['font-size'],
  lineHeight: FIAP_DS_TYPOGRAPHY.p['line-height'],
  fontWeight: FIAP_DS_TYPOGRAPHY.p.weight,
  color: FIAP_DS_COLORS.black[100],
});

export { paragraph };
