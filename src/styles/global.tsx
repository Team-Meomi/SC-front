
import React from 'react';
import { Global, css } from '@emotion/react';

const lightTheme = `
  --text: black;
  --background: white;
  --boxBackground: white;
  --header: white;
  --boxShadow:rgba(0, 0, 0, 0.1);
  --homeDetail: #EFEFEF;

`;
const darkTheme = `
  --text: white;
  --background: #1F1F1F;
  --boxBackground: #383737;
  --header: #282828;
  --boxShadow:rgba(255, 255, 255, 0.5);
  --homeDetail:#1F1F1F;
`;

const cssVar = (name: string) => `var(--${name})`;

export const themedPalette = {
  text: cssVar('text'),
  background: cssVar('background'),
  boxBackground: cssVar('boxBackground'),
  header: cssVar('header'),
  boxShadow: cssVar('boxShadow'),
  homeDetail: cssVar('homeDetail'),
};

const style = css`
body {
    ${lightTheme};
  }
  
  @media (prefers-color-scheme: dark) {
    html {
    color-scheme: dark;
    }
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