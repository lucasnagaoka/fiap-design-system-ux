export type InputVariant = 'primary' | 'secondary';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: InputVariant;
};
