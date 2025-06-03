import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        font-weight: 400;
        color: white;
    }

    h1 {
        font-size: 15px;
        font-weight: 700;
    }

    h1, h2, h3, h4 {
        margin: 0;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    button {
        font-size: 15px;
        border: none;
        background: transparent;
        padding: 0;
        cursor: pointer;
    }

    a {
        color: inherit; 
        text-decoration: none;
    }
`;

export default GlobalStyle;
