import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Nunito');

img {
  max-width: 100%;
}

:root {
  --color-primary: #FD377E;
  --color-primary-2: #03B898;
  --color-grey-1:  #F8F9FA;
  --color-grey-2:  #E9ECEF;
  --color-grey-3:  #343A40;
  --color-grey-4:  #212529;
  --color-black:  #000;
  --color-white:  #ffffff;

  --radius-default: 0.5rem;
  --radius-default-2: 0.125rem;

  --title-1: 2.375rem;
  --title-2: 1.375rem;
  --title-3: 1rem;
  --title-4: 0.75rem;

  --text-1:  1rem;
  --text-2:  0.75rem;
}

body {
    font-family: 'Nunito', sans-serif;
}
.header{
    background-color: black;
}

`;
