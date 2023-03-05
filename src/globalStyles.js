import { createGlobalStyle } from 'styled-components';
import Recursive from './fonts/Recursive.ttf';
import Righteous from './fonts/Righteous.ttf';

const GlobalStyle = createGlobalStyle`  

@font-face {
  font-family: Recursive;
  src: url(${Recursive});
}

@font-face {
  font-family: Righteous;
  src: url(${Righteous});
}

  body {
    margin: 0;
    padding: 0;
  }
  
  * {
    font-family: Recursive;
    font-weight: bold;
    box-sizing: border-box;
  }

`;

export default GlobalStyle;
