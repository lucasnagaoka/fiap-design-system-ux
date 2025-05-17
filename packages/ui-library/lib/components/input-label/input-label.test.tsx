import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InputLabel } from './input-label';

describe('InputLabel component', () => {
  it('Should render the label and input when a label is provided', () => {
    render(<InputLabel label='Nome' inputProps={{ variant: 'primary' }} />);
    const label = screen.getByText('Nome');
    const input = screen.getByRole('textbox');
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('Should correctly associate the label with the input using htmlFor and id', () => {
    render(<InputLabel label='Email' />);
    const label = screen.getByText('Email');
    const input = screen.getByRole('textbox');

    expect(label).toHaveAttribute('for', input.getAttribute('id'));
  });

  it('Should apply the input props correctly', () => {
    render(
      <InputLabel label='Senha' inputProps={{ placeholder: 'Password' }} />
    );
    const input = screen.getByPlaceholderText('Password');
    expect(input).toBeInTheDocument();
  });

  it('Should take an input-label snapshot', () => {
    const { asFragment } = render(<InputLabel label='Email' />);

    expect(asFragment).toMatchSnapshot();
  });
});
