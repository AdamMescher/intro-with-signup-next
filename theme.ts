const boxShadowOffset = {
  one: {
    y: '8px',
  },
};

const theme = {
  shadow: {
    one: `0px ${boxShadowOffset.one.y} 0px 0px rgba(0,0,0,0.5)`,
    offset: { ...boxShadowOffset },
    color: {
      accent: {
        blue: 'hsla(248, 32%, 49%, 0.4)',
      },
      primary: {
        green: 'hsla(154, 59%, 51%, 0.4)',
        red: 'hsla(0, 100%, 74%, 0.4)',
      },
    },
  },
  color: {
    primary: {
      red: 'hsl(0, 100%, 74%)',
      green: 'hsl(154, 59%, 51%)',
    },
    accent: {
      blue: 'hsl(248, 32%, 49%)',
    },
    neutral: {
      darkBlue: 'hsl(249, 10%, 26%)',
      grayishBlue: 'hsl(246, 25%, 77%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
  typography: {
    body: {
      fontSize: '16px',
    },
    font: {
      family: {
        poppins: "'Poppins', sans-serif",
      },
      weight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
      lineHeight: {
        heading: 1.3,
      },
      size: {
        body: `${16 / 16}rem`,
        h1: `${2.488}rem`,
        h2: `${2.074}rem`,
        h3: `${1.728}rem`,
        h4: `${1.44}rem`,
        h5: `${1.2}rem`,
        small: `${0.833}rem`,
      },
    },
  },
};

export default theme;
