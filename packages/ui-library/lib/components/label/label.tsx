import clsx from 'clsx';
import { fontText } from '../../styles/font.css';
import { label } from './label.styles.css';

import type { JSX } from 'react';
import type { LabelProps } from './label.types';

export function Label({ children, ...other }: LabelProps): JSX.Element {
  return (
    <label className={clsx([fontText, label])} {...other}>
      {children}
    </label>
  );
}

Label.displayName = 'Label';
