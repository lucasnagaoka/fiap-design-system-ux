import { style } from '@vanilla-extract/css';

import { FIAP_DS_SPACING } from '../../../design-tokens/spacing';

const cardContent = style({
  boxSizing: 'border-box',
  borderRadius: FIAP_DS_SPACING.s2,
  minWidth: FIAP_DS_SPACING.s10 * 5.9375,
  minHeight: FIAP_DS_SPACING.s10 * 3.1875,
});

export { cardContent };
