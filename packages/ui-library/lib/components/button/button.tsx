import styles from './button.module.css';

import type { JSX } from 'react';
import type { ButtonProps } from './button.types.ts';

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" className={styles.button} {...other}>
      {children}
    </button>
  );
}

Button.displayName = 'Button';
