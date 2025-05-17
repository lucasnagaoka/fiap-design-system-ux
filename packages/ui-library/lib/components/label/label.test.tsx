import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Label } from './label';

describe('Label component', () => {
  it('Should render a Label', () => {
    render(<Label htmlFor='label' children='Label' />);

    expect(screen.getByText('Label')).toBeInTheDocument();
  });

  it('Should take a label snapshot', () => {
    const { asFragment } = render(<Label htmlFor='label' children='Label' />);

    expect(asFragment).toMatchSnapshot();
  });
});
