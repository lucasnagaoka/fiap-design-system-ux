import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './button';

describe('Button component', () => {
  it('Should render an primary button with Hello text', () => {
    render(<Button children='Hello' variant='primary' />);

    expect(screen.getByText('Hello')).toBeTruthy();
  });

  it('Should render an secondary button with Hello text', () => {
    render(<Button children='Hello' variant='secondary' />);

    expect(screen.getByText('Hello')).toBeTruthy();
  });

  it('Should render an tertiary button with Hello text', () => {
    render(<Button children='Hello' variant='tertiary' />);

    expect(screen.getByText('Hello')).toBeTruthy();
  });
});
