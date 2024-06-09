import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
        font-family: "Overpass", sans-serif;
    }

    :root{
        font-size: 62.5%;
    }

    body{
        font-size: 1.6rem;
        background: ${props => props.theme.homeBackground};

        height: 100svh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`