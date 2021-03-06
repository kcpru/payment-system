import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';

export const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    
    * {
      font-family: Montserrat;
    }
  }
`;
