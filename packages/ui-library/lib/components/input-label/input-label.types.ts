import type { InputProps } from '../input/input.types';
import type { LabelProps } from '../label/label.types';

export type InputLabelProps = {
  label: string;
  variant?: 'primary' | 'secondary';
  labelProps?: LabelProps;
  inputProps?: InputProps;
};
