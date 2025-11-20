import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { ArrowRight } from 'react-feather';

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button />);
    const button = screen.getByRole('button', { name: /button/i });
    expect(button).toBeInTheDocument();
  });

  it('renders with custom label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('renders with custom children', () => {
    render(<Button>Custom Child</Button>);
    expect(screen.getByRole('button', { name: /custom child/i })).toBeInTheDocument();
  });

  it('renders left icon when provided', () => {
    render(<Button iconL={<ArrowRight data-testid="arrow-icon" />} />);
    expect(screen.getByTestId('icon-left')).toBeInTheDocument();
    expect(screen.getByTestId('arrow-icon')).toBeInTheDocument();
  });

  it('renders right icon when provided', () => {
    render(<Button iconR={<ArrowRight data-testid="arrow-icon" />} />);
    expect(screen.getByTestId('icon-right')).toBeInTheDocument();
    expect(screen.getByTestId('arrow-icon')).toBeInTheDocument();
  });

  it('applies disabled attribute when disabled prop is true', () => {
    render(<Button disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});