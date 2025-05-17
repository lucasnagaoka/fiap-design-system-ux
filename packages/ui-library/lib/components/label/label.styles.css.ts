import { style } from '@vanilla-extract/css';

import { FIAP_DS_COLORS } from '../../design-tokens/colors';
import { FIAP_DS_SPACING } from '../../design-tokens/spacing';
import { FIAP_DS_TYPOGRAPHY } from '../../design-tokens/typography';

const label = style({
  padding: FIAP_DS_SPACING.s2,
  width: '100%',
  fontSize: FIAP_DS_TYPOGRAPHY.small['font-size'],
  lineHeight: FIAP_DS_TYPOGRAPHY.small['line-height'],
  fontWeight: FIAP_DS_TYPOGRAPHY.small.weight,
  backgroundColor: FIAP_DS_COLORS.white[100],
  color: FIAP_DS_COLORS.primary[500],
});

export { label };
