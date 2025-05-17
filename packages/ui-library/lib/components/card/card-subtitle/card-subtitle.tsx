import React from 'react';
import type { CardSubTitleProps } from './card-subtitle.types';

export function CardSubTitle({
  subtitle,
  ...other
}: CardSubTitleProps): React.JSX.Element {
  return <p {...other}>{subtitle}</p>;
}

CardSubTitle.displayName = 'CardSubTitle';
