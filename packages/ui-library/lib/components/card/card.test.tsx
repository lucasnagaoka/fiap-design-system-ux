import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card } from './card';

describe('Card component', () => {
  const title = 'Título do Card';
  const subtitle = 'Subtítulo do Card';
  const imageUrl = 'https://placehold.co/380x204';
  const imageAltText = 'Imagem de teste';

  it('Should render the card with all properties', () => {
    render(
      <Card
        title={title}
        subtitle={subtitle}
        imageUrl={imageUrl}
        imageAltText={imageAltText}
      />
    );
    const image = screen.getByAltText(imageAltText) as HTMLImageElement;
    const titleElement = screen.getByText(title);
    const subtitleElement = screen.getByText(subtitle);

    expect(image).toBeInTheDocument();
    expect(image.src).toBe(imageUrl);
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  it('Should render the card component without the subtitle prop', () => {
    render(
      <Card title={title} imageUrl={imageUrl} imageAltText={imageAltText} />
    );
    const image = screen.getByAltText(imageAltText) as HTMLImageElement;
    const titleElement = screen.getByText(title);

    expect(image).toBeInTheDocument();
    expect(image.src).toBe(imageUrl);
    expect(titleElement).toBeInTheDocument();
  });

  it('Should take a card snapshot', () => {
    const { asFragment } = render(
      <Card
        title={title}
        subtitle={subtitle}
        imageUrl={imageUrl}
        imageAltText={imageAltText}
      />
    );

    expect(asFragment).toMatchSnapshot();
  });
});
