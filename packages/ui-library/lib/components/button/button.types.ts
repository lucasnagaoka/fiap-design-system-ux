export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'button';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant?: ButtonVariant;
};
