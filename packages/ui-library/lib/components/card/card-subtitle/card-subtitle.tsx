import { Paragraph } from '../../typography/p/paragraph';

import type { CardSubTitleProps } from './card-subtitle.types';

export function CardSubTitle({
  subtitle,
  ...other
}: CardSubTitleProps): React.JSX.Element {
  return <Paragraph {...other}>{subtitle}</Paragraph>;
}

CardSubTitle.displayName = 'CardSubTitle';
