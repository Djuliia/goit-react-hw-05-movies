import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif; 
  background-color: #030303;
  color: #fff;
  font-size: 16px;
    }

ul {
    list-style: none;
    margin:0;
    padding: 0;
}
    
  

`;
