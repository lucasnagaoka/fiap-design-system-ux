import { style } from '@vanilla-extract/css';

import { FIAP_DS_SPACING } from '../../design-tokens/spacing';
import { FIAP_DS_TYPOGRAPHY } from '../../design-tokens/typography';

const card = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: FIAP_DS_SPACING.s4,
  outline: '1px solid black',
  borderRadius: FIAP_DS_SPACING.s2,
  width: '100%',
  minWidth: FIAP_DS_SPACING.s10,
  maxWidth: FIAP_DS_SPACING.s10 * 5.875,
  fontSize: FIAP_DS_TYPOGRAPHY.p['font-size'],
  lineHeight: FIAP_DS_TYPOGRAPHY.p['line-height'],
  fontWeight: FIAP_DS_TYPOGRAPHY.p.weight,
});

const cardHeader = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: FIAP_DS_SPACING.s4,
  padding: FIAP_DS_SPACING.s1,
});

export { card, cardHeader };
