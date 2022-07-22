import { createGlobalStyle } from 'styled-components';
import theme from '../../theme';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary-red: ${theme.color.primary.red};
    --color-primary-green: ${theme.color.primary.green};
    --color-accent-blue: ${theme.color.accent.blue};
    --color-neutral-dark-blue: ${theme.color.neutral.darkBlue};
    --color-neutral-grayish-blue: ${theme.color.neutral.grayishBlue};
    --color-neutral-white: ${theme.color.neutral.white};
    --font-size-body: ${theme.typography.font.size.body};
    --font-size-small: ${theme.typography.font.size.small};
    --font-size-h1: ${theme.typography.font.size.h1};
    --font-size-h2: ${theme.typography.font.size.h2};
    --font-size-h3: ${theme.typography.font.size.h3};
    --font-size-h4: ${theme.typography.font.size.h4};
    --font-size-h5: ${theme.typography.font.size.h5};
    --font-family-poppins: ${theme.typography.font.family.poppins};
    --font-weight-regular: ${theme.typography.font.weight.regular};
    --font-weight-medium: ${theme.typography.font.weight.medium};
    --font-weight-semi-bold: ${theme.typography.font.weight.semiBold};
    --font-weight-bold: ${theme.typography.font.weight.bold};
    --line-height-header: ${theme.typography.font.lineHeight.heading};
    --box-shadow-offset-one-y: ${theme.shadow.offset.one.y};
    --box-shadow-one: ${theme.shadow.one};
    --box-shadow-color-accent-blue: ${theme.shadow.color.accent.blue};
    --box-shadow-color-primary-green: ${theme.shadow.color.primary.green};
    --box-shadow-color-primary-red: ${theme.shadow.color.primary.red};
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
  body {
    font-size: var(--font-size-body);
    font-family: var(--font-family-poppins);
  }
  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: var(--font-family-poppins);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-header);
  }
  h1 {
    margin-top: 0;
    font-size: var(--font-size-h1);
  }
  h2 {
    font-size: var(--font-size-h2);
  }
  h3 {
    font-size: var(--font-size-h3);
  }
  h4 {
    font-size: var(--font-size-h4);
  }
  h5 {
    font-size: var(--font-size-h5);
  }
  small {
    font-size: var(--font-size-small);
  }
`;

export default GlobalStyle;
