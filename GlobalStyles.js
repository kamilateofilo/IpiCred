import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

  >a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
