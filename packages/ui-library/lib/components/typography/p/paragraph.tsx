import { clsx } from 'clsx';
import { fontText } from '../../../styles/font.css.ts';
import { paragraph } from './paragraph.styles.css.ts';

import type { JSX } from 'react';
import type { ParagraphProps } from './paragraph.types.ts';

export function Paragraph({
  className,
  children,
  ...other
}: ParagraphProps): JSX.Element {
  return (
    <p className={clsx([className, fontText, paragraph])} {...other}>
      {children}
    </p>
  );
}

Paragraph.displayName = 'Paragraph';
