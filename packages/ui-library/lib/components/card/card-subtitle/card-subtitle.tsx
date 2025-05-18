import { Paragraph } from '../../typography/p/paragraph';
import { cardSubTitle } from './card-subtitle.styles.css';

import type { CardSubTitleProps } from './card-subtitle.types';

export function CardSubTitle({
  subtitle,
  ...other
}: CardSubTitleProps): React.JSX.Element {
  return (
    <Paragraph className={cardSubTitle} {...other}>
      {subtitle}
    </Paragraph>
  );
}

CardSubTitle.displayName = 'CardSubTitle';
