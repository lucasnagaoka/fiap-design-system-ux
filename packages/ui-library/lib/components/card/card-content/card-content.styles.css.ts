import { style } from '@vanilla-extract/css';

import { FIAP_DS_COLORS } from '../../../design-tokens/colors';
import { FIAP_DS_SPACING } from '../../../design-tokens/spacing';

const cardContent = style({
  boxSizing: 'border-box',
  border: `2px solid ${FIAP_DS_COLORS.primary[900]}`,
  borderRadius: FIAP_DS_SPACING.s2,
  minWidth: FIAP_DS_SPACING.s10 * 5.9375,
  minHeight: FIAP_DS_SPACING.s10 * 3.1875,
});

export { cardContent };
