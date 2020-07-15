import { createGlobalStyle } from "styled-components";
import { colours } from "./SharedStyles";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Metric", 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #fff;
    }

    ::-webkit-scrollbar-thumb {
        background: ${colours.lightGrey};
        border-radius: 20px;
    }
`;

export default GlobalStyle;