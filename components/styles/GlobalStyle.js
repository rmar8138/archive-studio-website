import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Suisse Intl Regular';
    src: url('../static/fonts/Suisse-BP-Int_l-Regular.otf');
  }

  @font-face {
    font-family: 'Suisse Works Book';
    src: url('../static/fonts/SuisseWorks-Book.otf');
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    /* border: 1px solid orangered; */
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Suisse Intl Regular', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Suisse Works Book', sans-serif;
  }

  a {
    text-decoration: none;
    color: black;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
