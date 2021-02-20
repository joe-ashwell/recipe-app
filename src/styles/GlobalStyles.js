import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* background-color: #1b1b1b;
    font-family: 'inter', sans-serif;
    overflow-x: hidden; */
  }

  h1,
  h2,
  h3 {
    font-family: 'Kalam', cursive;
  }

  button,
  input,
  p {
    font-family: 'Raleway', sans-serif;
  }
`;

export default GlobalStyle;
