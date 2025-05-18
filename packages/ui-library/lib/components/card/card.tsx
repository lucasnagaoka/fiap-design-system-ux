import { clsx } from 'clsx';
import { fontText } from '../../styles/font.css';
import { card, cardHeader, cardImage } from './card.styles.css';
import { CardTitle } from './card-title/card-title';
import { CardSubTitle } from './card-subtitle/card-subtitle';
import { CardContent } from './card-content/card-content';

import type { CardProps } from './card.types';

export function Card({
  title,
  subtitle,
  imageUrl,
  imageAltText,
  ...other
}: CardProps): React.JSX.Element {
  return (
    <div className={clsx([fontText, card])} {...other}>
      <div className={cardHeader}>
        <Card.Title title={title} />
        {subtitle ? <Card.SubTitle subtitle={subtitle} /> : null}
      </div>
      <Card.Content>
        {imageUrl && (
          <img src={imageUrl} alt={imageAltText} className={cardImage} />
        )}
      </Card.Content>
    </div>
  );
}

Card.displayName = 'Card';
Card.Title = CardTitle;
Card.SubTitle = CardSubTitle;
Card.Content = CardContent;
