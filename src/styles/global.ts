import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font: 18px 'Lato', sans-serif;
    background-color: #fff;
    color: #e1e1e1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased !important;
  }
`;