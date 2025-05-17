import React from 'react';
import type { CardTitleProps } from './card-title.types';

export function CardTitle({
  title,
  ...other
}: CardTitleProps): React.JSX.Element {
  return <h3 {...other}>{title}</h3>;
}

CardTitle.displayName = 'CardTitle';
