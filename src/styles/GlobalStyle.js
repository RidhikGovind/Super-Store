import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
}


*,
*:before,
*:after {
    box-sizing: inherit;
}


html{
    width: 100%;
    height: 100%;
   
}

body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 400;
    font-family: 'Ubuntu', sans-serif;
}

a{
    display: inline-block;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    transition: ${theme.transition};

}

li{
    list-style: none;
    font-size: 1rem;
    font-weight: 500;
}
`;

export default GlobalStyle;
