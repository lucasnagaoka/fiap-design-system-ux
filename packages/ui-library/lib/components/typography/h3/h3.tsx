import { clsx } from 'clsx';
import { fontText } from '../../../styles/font.css';
import { h3 } from './h3.styles.css';

import type { JSX } from 'react';
import type { H3Props } from './h3.types.ts';

export function H3({ className, children, ...other }: H3Props): JSX.Element {
  return (
    <h3 className={clsx([className, fontText, h3])} {...other}>
      {children}
    </h3>
  );
}

H3.displayName = 'H3';
