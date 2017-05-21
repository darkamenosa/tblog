import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html {
    overflow: scroll;
  }

  body {
    font-family: GothamPro;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
    background-color: rgb(250, 250, 250);
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;
