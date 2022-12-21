
import React from 'react';
import { Global, css } from '@emotion/react';

const lightTheme = `
  --text: black;
  --background: white;
`;
const darkTheme = `
  --color-text: white;
  --color-background: black;
`;

const cssVar = (name: string) => `var(--${name})`;

export const themedPalette = {
  text: cssVar('text'),
  background: cssVar('background'),
};

const style = css`
body {
    ${lightTheme};
  }
  
  @media (prefers-color-scheme: dark) {
    body {
      ${darkTheme}
    }
  }
  body[data-theme='light'] {
    ${lightTheme};
  }
  
  body[data-theme='dark'] {
    ${darkTheme};
  }
`;

const GlobalStyle = () => {
    return <Global styles={style} />;
};

export default GlobalStyle;