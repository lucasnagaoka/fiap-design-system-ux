import { cardContent } from './card-content.styles.css';

import type { CardContentProps } from './card-content.types';

export function CardContent({
  children,
  ...other
}: CardContentProps): React.JSX.Element {
  return (
    <div className={cardContent} {...other}>
      {children}
    </div>
  );
}

CardContent.displayName = 'CardContent';
