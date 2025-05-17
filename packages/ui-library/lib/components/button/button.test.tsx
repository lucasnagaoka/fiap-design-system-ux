import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './button';
import * as styles from './button.styles.css.ts';

describe('Button component', () => {
  it('Should render an primary button with Hello text', () => {
    render(<Button children='Hello' variant='primary' />);
    const button = screen.getByRole('button', { name: /hello/i });

    expect(button.classList.contains(styles.button)).toBeTruthy();
    expect(button.classList.contains(styles.buttonPrimary)).toBeTruthy();
  });

  it('Should render an secondary button with Hello text', () => {
    render(<Button children='Hello' variant='secondary' />);
    const button = screen.getByRole('button', { name: /hello/i });

    expect(button.classList.contains(styles.button)).toBeTruthy();
    expect(button.classList.contains(styles.buttonSecondary)).toBeTruthy();
  });

  it('Should render an tertiary button with Hello text', () => {
    render(<Button children='Hello' variant='tertiary' />);

    const button = screen.getByRole('button', { name: /hello/i });

    expect(button.classList.contains(styles.button)).toBeTruthy();
    expect(button.classList.contains(styles.buttonTertiary)).toBeTruthy();
  });

  it('Should render a clickable button', () => {
    const handleClick = vi.fn();

    render(
      <Button children='Sing in' variant='primary' onClick={handleClick} />
    );
    fireEvent.click(screen.getByText('Sing in'));

    expect(handleClick).toHaveBeenCalled();
    expect(screen.getByText('Sing in')).toBeTruthy();
  });

  it('Should take a button snapshot', () => {
    const { asFragment } = render(
      <Button children='Sing up' variant='primary' />
    );

    expect(asFragment).toMatchSnapshot();
  });
});
