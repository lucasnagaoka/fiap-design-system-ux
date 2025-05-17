import { H3 } from '../../typography/h3/h3';
import type { CardTitleProps } from './card-title.types';

export function CardTitle({
  title,
  ...other
}: CardTitleProps): React.JSX.Element {
  return <H3 {...other}>{title}</H3>;
}

CardTitle.displayName = 'CardTitle';
