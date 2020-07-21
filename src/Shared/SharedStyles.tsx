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


interface SectionProps {
    dark?: boolean;
  }

export const SectionContainer = styled.div`
  min-height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  background: ${(p: SectionProps) => p.dark ? colours.dark : colours.light};
  color: ${(p: SectionProps) => p.dark ? colours.light : colours.dark};
  font-weight: 100;

  h1 {
    font-size: 3em;
    font-weight: 200;
    margin-top: 100px;
  }

  p {
      font-size: 1.8em;
  }
`;