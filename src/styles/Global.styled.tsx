import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  margin: 0;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${theme.colors.colorText};
  line-height: 1.2;
  min-width: 360px;
}

a{
  text-decoration: none;
  color:${theme.colors.colorText};
  cursor: pointer;
}

ul{
list-style: none;
}

button{
  background-color: unset;
  border: unset;
  cursor: pointer;
  color: ${theme.colors.colorText}
}

section {
  padding: 80px 0;
  background-color: ${theme.colors.secondary};
  
  @media ${theme.media.mobile} {
    padding: 60px 0;
  }
}

h1{
  font-weight: 600;
    font-size: 52px;
    letter-spacing: 1px;
}

h2{
    font-weight: 600;
    font-size: 32px;
    letter-spacing: 1px;
  }

  h3{
    font-weight: 600;
    font-size: 28px;
    letter-spacing: 1px;
  }

  h4{
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 1px;
  }

  p{
    font-weight: 500;
    font-size: 18px;
    line-height: 1.4;
  }
`;
