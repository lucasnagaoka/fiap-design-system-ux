import { useId, type JSX } from 'react';
import { Label } from '../label/label';
import { Input } from '../input/input';
import { inputLabel } from './input-label.styles.css';

import type { InputLabelProps } from './input-label.types';

export function InputLabel({
  label,
  variant = 'primary',
  labelProps = {},
  inputProps = {},
}: InputLabelProps): JSX.Element {
  const id = useId();

  return (
    <div className={inputLabel}>
      {label && (
        <Label htmlFor={`${id}-${label}`} {...labelProps}>
          {label}
        </Label>
      )}
      <Input id={`${id}-${label}`} variant={variant} {...inputProps} />
    </div>
  );
}

InputLabel.displayName = 'InputLabel';
