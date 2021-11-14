import { createGlobalStyle } from 'styled-components';
import Raleway from './fonts/Raleway-Regular.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family:'Raleway';
  src: url(${Raleway}) format('truetype');
}

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
*:focus {
  outline-style: solid;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Raleway',sans-serif;
  font-size: 1.6rem;
  letter-spacing: 0.0625rem;
}
`;

export default GlobalStyle;
