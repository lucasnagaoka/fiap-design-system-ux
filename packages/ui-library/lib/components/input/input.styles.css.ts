import { style } from '@vanilla-extract/css';

import { FIAP_DS_COLORS } from '../../design-tokens/colors';
import { FIAP_DS_SPACING } from '../../design-tokens/spacing';
import { FIAP_DS_TYPOGRAPHY } from '../../design-tokens/typography';

const input = style({
  padding: FIAP_DS_SPACING.s2,
  borderRadius: FIAP_DS_SPACING.s2,
  border: 0,
  width: '100%',
  fontSize: FIAP_DS_TYPOGRAPHY.button['font-size'],
  lineHeight: FIAP_DS_TYPOGRAPHY.button['line-height'],
  fontWeight: FIAP_DS_TYPOGRAPHY.button.weight,

  ':focus-visible': {
    outline: `1px solid ${FIAP_DS_COLORS.white[100]}`,
  },
});

const inputPrimary = style({
  backgroundColor: FIAP_DS_COLORS.primary[900],
  color: FIAP_DS_COLORS.white[100],

  '::placeholder': {
    color: FIAP_DS_COLORS.white[100],
  },
});

const inputSecondary = style({
  backgroundColor: FIAP_DS_COLORS.white[100],
  color: FIAP_DS_COLORS.primary[700],
  border: `1px solid ${FIAP_DS_COLORS.primary[700]}`,

  '::placeholder': {
    color: FIAP_DS_COLORS.primary[700],
  },
});

export { input, inputPrimary, inputSecondary };
