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
    box-sizing: border-box;
  }
  
  * {
    font-family: Recursive;
    font-weight: bold;
  }

`;

export default GlobalStyle;
