import clsx from 'clsx';
import { fontText } from '../../styles/font.css';
import { input, inputPrimary, inputSecondary } from './input.styles.css';

import type { JSX } from 'react';
import type { InputProps, InputVariant } from './input.types';

export function Input({
  variant = 'primary',
  ...other
}: InputProps): JSX.Element {
  function getVariantClass(variant: InputVariant) {
    switch (variant) {
      case 'primary':
        return inputPrimary;
      case 'secondary':
        return inputSecondary;
      default:
        return input;
    }
  }

  return (
    <input
      className={clsx([fontText, input, getVariantClass(variant)])}
      {...other}
    />
  );
}

Input.displayName = 'Input';
