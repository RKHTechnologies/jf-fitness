import React from 'react';
import HeaderBar from './HeaderBar';
import styled from 'styled-components';
import { colours, SectionContainer } from '../Shared/SharedStyles';
import GlobalStyle from '../Shared/GlobalStyle';
import MetricTest from "./MetricTest";
import LandingSection from './LandingSection';
import About from './About';

const ContentContainer = styled.div`
  position: absolute;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  border-top: 1px solid ${colours.lightGrey};
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Home: React.FC = () => {
  
  return (
    <>
      <GlobalStyle />
      <HeaderBar stickyHeader />
      <ContentContainer>
      <Section id="landing">
          <LandingSection />
        </Section>
        
        <Section id="about">
          <About />
        </Section>
        
        <Section id="testemonials">
          <SectionContainer dark><h1>Testemonials</h1></SectionContainer>
        </Section>

        <Section id="partners">
          <SectionContainer><h1>Partners</h1></SectionContainer>
        </Section>

        <Section id="services">
          <SectionContainer dark><h1>Services</h1></SectionContainer>
        </Section>

        <Section id="contact">
          <SectionContainer><h1>Contact</h1></SectionContainer>
        </Section>

        <Section id="metric">
          <MetricTest />
        </Section>

      </ContentContainer>
    </>
  );
}

export default Home;