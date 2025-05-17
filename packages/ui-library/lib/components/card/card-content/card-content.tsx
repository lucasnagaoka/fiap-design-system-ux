import type { CardContentProps } from './card-content.types';

export function CardContent({
  children,
  ...other
}: CardContentProps): React.JSX.Element {
  return <div {...other}>{children}</div>;
}

CardContent.displayName = 'CardContent';
