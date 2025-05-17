import { clsx } from 'clsx';
import { fontText } from '../../../styles/font.css.ts';
import { paragraph } from './paragraph.styles.css.ts';

import type { JSX } from 'react';
import type { ParagraphProps } from './paragraph.types.ts';

export function Paragraph({ children, ...other }: ParagraphProps): JSX.Element {
  return (
    <p className={clsx([fontText, paragraph])} {...other}>
      {children}
    </p>
  );
}

Paragraph.displayName = 'Paragraph';
