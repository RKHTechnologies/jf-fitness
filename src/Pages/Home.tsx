import React from 'react';
import HeaderBar from '../Components/HeaderBar';
import styled from 'styled-components';
import { colours, SectionContainer, SharedSettings } from '../Shared/SharedStyles';
import GlobalStyle from '../Shared/GlobalStyle';
import LandingSection from '../Components/LandingSection';
import About from '../Components/About';
import Testimonials from '../Components/Testimonials';

// const ContentContainer = styled.div`
//   position: absolute;
//   top: 80px;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   overflow-y: scroll;
//   -webkit-overflow-scrolling: touch;
//   border-top: 1px solid ${colours.lightGrey};
// `;


interface SectionProps {
  fullwidth?: boolean;
  lastItem?: boolean;
}

const Section = styled.div`
  width: 100%;
  min-height: 200px;
  padding: ${(p: SectionProps) => p.fullwidth ? "20px 0 100px" : "20px 30px 100px"};
  padding-bottom: ${(p: SectionProps) => p.lastItem ? "0 !important" : null};
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  div.wrapper {
    width: 96%;
    max-width: ${SharedSettings.maxWidth};
    display: flex;
    flex-wrap: wrap;
  }

  @media(max-width: 1100px) {
    padding: 20px 0 50px;
  }
`;

const Home: React.FC = () => {
  
  return (
    <>
      <Section id="landing">
        <LandingSection />
      </Section>
      
      <Section id="about">
        <About />
      </Section>

      <Section id="testimonials">
        <Testimonials />
      </Section>
      
      <Section id="services">
        <SectionContainer><h1>Services</h1></SectionContainer>
      </Section>

      <Section id="contact">
        <SectionContainer dark><h1>Contact</h1></SectionContainer>
      </Section>
    </>
  );
}

export default Home;