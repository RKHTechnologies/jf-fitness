import styled from "styled-components";

export type Colour = 'light' | 'dark' | 'primary' | 'secondary' | 'darkGrey' | 'lightGrey';

interface ColoursProps {
    light: string,
    dark: string,
    primary: string,
    secondary: string,
    darkGrey: string,
    lightGrey: string
}

export const colours: ColoursProps = {
    // light: "#FFFFFF",
    light: "rgb(255 255 255 / 0.88)",
    dark: "#000000",
    primary: "#0D98E9",
    secondary: "E6E7EA",
    darkGrey: "#818999",
    lightGrey: "#D2D2D2",

}


interface SettingsProps {
    maxWidth: string;
    maxWidthHalf: string;
    mobile: string;
}

export const SharedSettings: SettingsProps = {
    maxWidth: "1600px",
    maxWidthHalf: "800px",
    mobile: "1100px",
}


export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: ${colours.light};
`;


export const PageBodyContainer = styled.div`
  position: absolute;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
`;


interface SectionProps {
    dark?: boolean;
  }

export const SectionContainer = styled.div`
  min-height: 400px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  /* background: ${(p: SectionProps) => p.dark ? colours.dark : colours.light}; */
  background: transparent;
  color: ${(p: SectionProps) => p.dark ? colours.light : colours.dark};
  font-weight: 100;

  h1 {
    font-size: 3em;
    font-weight: 200;
    margin-top: 100px;
  }

  p {
      font-size: 1.8em;
      font-weight: 300;
      text-align: center;
      margin: 10px 0;
      font-weight: 100;
  }

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 10px 0;
  }
`;