import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Input } from './input';
import * as styles from './input.styles.css.ts';

describe('Input component', () => {
  it('Should render a primary input', () => {
    render(<Input variant='primary' placeholder='meu input' />);
    const input = screen.getByPlaceholderText('meu input');

    expect(input.classList.contains(styles.input)).toBeTruthy();
    expect(input.classList.contains(styles.inputPrimary)).toBeTruthy();
  });

  it('Should render a secondary input', () => {
    render(<Input variant='secondary' placeholder='meu input' />);
    const input = screen.getByPlaceholderText('meu input');

    expect(input.classList.contains(styles.input)).toBeTruthy();
    expect(input.classList.contains(styles.inputSecondary)).toBeTruthy();
  });

  it('Should render the primary input if no variant is passed.', () => {
    render(<Input placeholder='meu input' />);
    const input = screen.getByPlaceholderText('meu input');

    expect(input.classList.contains(styles.input)).toBeTruthy();
    expect(input.classList.contains(styles.inputPrimary)).toBeTruthy();
    expect(input.classList.contains(styles.inputSecondary)).toBeFalsy();
  });

  it('Should take a input snapshot', () => {
    const { asFragment } = render(
      <Input placeholder='Email' variant='primary' />
    );

    expect(asFragment).toMatchSnapshot();
  });
});
