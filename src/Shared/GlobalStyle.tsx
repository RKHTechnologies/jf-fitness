import { createGlobalStyle } from "styled-components";
import { colours } from "./SharedStyles";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Metric", 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        scroll-behavior: smooth;
    }

    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        background: #121212;
    }

    ::-webkit-scrollbar-thumb {
        background: #616161;
        border-radius: 20px;
    }
`;

export default GlobalStyle;