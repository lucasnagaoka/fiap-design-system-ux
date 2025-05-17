import { clsx } from 'clsx';
import { fontText } from '../../styles/font.css';
import {
  button,
  buttonPrimary,
  buttonSecondary,
  buttonTertiary,
} from './button.styles.css';

import type { JSX } from 'react';
import type { ButtonProps, ButtonVariant } from './button.types.ts';

export function Button({
  children,
  variant = 'button',
  ...other
}: ButtonProps): JSX.Element {
  function getVariantClass(variant: ButtonVariant) {
    switch (variant) {
      case 'primary':
        return buttonPrimary;
      case 'secondary':
        return buttonSecondary;
      case 'tertiary':
        return buttonTertiary;
      default:
        return button;
    }
  }

  return (
    <button
      className={clsx([fontText, button, getVariantClass(variant)])}
      {...other}
    >
      {children}
    </button>
  );
}

Button.displayName = 'Button';
