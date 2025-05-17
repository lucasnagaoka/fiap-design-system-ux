import { style } from '@vanilla-extract/css';

import { FIAP_DS_SPACING } from '../../design-tokens/spacing';
import { FIAP_DS_TYPOGRAPHY } from '../../design-tokens/typography';

const card = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: FIAP_DS_SPACING.s4,
  borderRadius: FIAP_DS_SPACING.s2,
  width: '100%',
  minWidth: FIAP_DS_SPACING.s10,
  maxWidth: FIAP_DS_SPACING.s10 * 5.9375,
});

const cardHeader = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: FIAP_DS_SPACING.s4,
  padding: FIAP_DS_SPACING.s1,
  fontSize: FIAP_DS_TYPOGRAPHY.p['font-size'],
  lineHeight: FIAP_DS_TYPOGRAPHY.p['line-height'],
  fontWeight: FIAP_DS_TYPOGRAPHY.p.weight,
});

const cardImage = style({
  width: '100%',
  height: 'auto',
  borderRadius: FIAP_DS_SPACING.s2,
  objectFit: 'cover',
  objectPosition: 'center',
  boxSizing: 'border-box',
});

export { card, cardHeader, cardImage };
