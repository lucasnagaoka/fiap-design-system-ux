import { useId, type JSX } from 'react';
import type { InputLabelProps } from './input-label.types';
import { Label } from '../label/label';
import { Input } from '../input/input';

export function InputLabel({
  label,
  variant = 'primary',
  labelProps,
  inputProps,
}: InputLabelProps): JSX.Element {
  const id = useId();

  return (
    <>
      {label && (
        <Label htmlFor={`${id}-${label}`} {...labelProps}>
          {label}
        </Label>
      )}
      <Input id={`${id}-${label}`} variant={variant} {...inputProps} />
    </>
  );
}

InputLabel.displayName = 'InputLabel';
