import type { JSX } from 'react';
import type { ButtonProps } from './button.types';

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" {...other}>
      {children}
    </button>
  );
}

Button.displayName = 'Button';
