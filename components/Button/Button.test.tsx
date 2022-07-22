import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Button from './Button';

expect.extend(toHaveNoViolations);

describe('Button Component', () => {
  it('Should render without errors', () => {
    render(
      <Button>
        <p>Button text</p>
        <p>goes here</p>
      </Button>
    );
    expect(screen.getByText(/button text/i)).toBeInTheDocument();
    expect(screen.getByText(/goes here/i)).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    render(
      <Button>
        <p>Button text</p>
      </Button>
    );
    expect(await axe(screen.getByText(/button text/i))).toHaveNoViolations();
  });
});
