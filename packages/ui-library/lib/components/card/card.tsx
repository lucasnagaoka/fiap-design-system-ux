import React from 'react';
import { CardTitle } from './card-title/card-title';
import { CardSubTitle } from './card-subtitle/card-subtitle';
import type { CardProps } from './card.types';

export function Card({
  title,
  subtitle,
  ...other
}: CardProps): React.JSX.Element {
  return (
    <div {...other}>
      <Card.Title title={title} />
      {subtitle ? <Card.SubTitle subtitle={subtitle} /> : null}
      Card content
    </div>
  );
}

Card.displayName = 'Card';
Card.Title = CardTitle;
Card.SubTitle = CardSubTitle;
