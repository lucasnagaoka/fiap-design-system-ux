import { style } from '@vanilla-extract/css';
import { FIAP_DS_COLORS } from '../../design-tokens/colors';
import { FIAP_DS_SPACING } from '../../design-tokens/spacing';
import { FIAP_DS_TYPOGRAPHY } from '../../design-tokens/typography';

const button = style({
  padding: FIAP_DS_SPACING.s4,
  borderRadius: FIAP_DS_SPACING.s2,
  width: '100%',
  minWidth: FIAP_DS_SPACING.s6,
  maxWidth: FIAP_DS_SPACING.s10 * 2,
  fontSize: FIAP_DS_TYPOGRAPHY.p['font-size'],
  lineHeight: FIAP_DS_TYPOGRAPHY.button['line-height'],
  fontWeight: FIAP_DS_TYPOGRAPHY.button.weight,
  textAlign: 'center',
  borderWidth: 0,
});

const buttonPrimary = style({
  backgroundColor: FIAP_DS_COLORS.primary[900],
  color: FIAP_DS_COLORS.white[100],
});

const buttonSecondary = style({
  backgroundColor: FIAP_DS_COLORS.white[100],
  color: FIAP_DS_COLORS.primary[900],
  borderColor: FIAP_DS_COLORS.primary[900],
  borderWidth: '1px',
  borderStyle: 'solid',
});

const buttonTertiary = style({
  backgroundColor: FIAP_DS_COLORS.white[100],
  color: FIAP_DS_COLORS.black[25],
  borderColor: FIAP_DS_COLORS.black[25],
  borderWidth: '1px',
  borderStyle: 'solid',
});

export { button, buttonPrimary, buttonSecondary, buttonTertiary };
