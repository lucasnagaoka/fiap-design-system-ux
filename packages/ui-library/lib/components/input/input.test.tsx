import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Input } from './input';

describe('Input component', () => {
  it('Should render an input type email with Email placeholder', () => {
    render(<Input type='email' placeholder='Email' variant='primary' />);

    expect(screen.getByPlaceholderText('Email')).toBeTruthy();
  });

  it('Should render an input type text with Email placeholder', () => {
    render(<Input type='text' placeholder='Name' variant='secondary' />);

    expect(screen.getByPlaceholderText('Name')).toBeTruthy();
  });
});
