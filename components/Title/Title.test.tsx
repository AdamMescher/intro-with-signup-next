import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Title from './Title';

expect.extend(toHaveNoViolations);

describe('Title Component', () => {
  it('Should render without errors', () => {
    render(<Title>Title text</Title>);
    expect(screen.getByText(/Title text/i)).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    render(<Title>title text</Title>);
    expect(await axe(screen.getByText(/title text/i))).toHaveNoViolations();
  });
});
