import styled from "styled-components";

interface ColoursProps {
    light: string,
    dark: string,
    primary: string,
    secondary: string,
    darkGrey: string,
    lightGrey: string
}

export const colours: ColoursProps = {
    light: "#FFF",
    dark: "#000",
    primary: "#0D98E9",
    secondary: "E6E7EA",
    darkGrey: "#707070",
    lightGrey: "#D2D2D2",
}


interface SettingsProps {
    maxWidth: string;
    maxWidthHalf: string;
}

export const SharedSettings: SettingsProps = {
    maxWidth: "1400px",
    maxWidthHalf: "700px",
}




export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;



