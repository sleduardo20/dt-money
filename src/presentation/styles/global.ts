import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0 ;
    padding:0 ;
    box-sizing:border-box ;
  }

  :focus{
    outline:0 ;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['green-500']} ;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme['gray-800']} ;
    color: ${({ theme }) => theme['gray-100']} ;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size:  1.6rem;
    }
`;
