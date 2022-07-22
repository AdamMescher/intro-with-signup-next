import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Banner from './Banner';

expect.extend(toHaveNoViolations);

describe('Banner Component', () => {
  it('Should render without errors', () => {
    render(
      <Banner>
        <p>banner text</p>
        <p>goes here</p>
      </Banner>
    );
    expect(screen.getByText(/banner text/i)).toBeInTheDocument();
    expect(screen.getByText(/goes here/i)).toBeInTheDocument();
  });
  it('Should render without axe a11y errors', async () => {
    render(
      <Banner>
        <p>banner text</p>
      </Banner>
    );
    expect(await axe(screen.getByText(/banner text/i))).toHaveNoViolations();
  });
});
