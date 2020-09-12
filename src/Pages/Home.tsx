import React from 'react';
import styled from 'styled-components';
import { SectionContainer, SharedSettings, PageBodyContainer } from '../Shared/SharedStyles';
import About from '../Components/About';
import Testimonials from '../Components/Testimonials';
import Hero from '../Shared/Hero';

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
    <PageBodyContainer>
      <Hero image="gym" />
      
      <Section id="about">
        <div className="wrapper">
          <About />
        </div>
      </Section>

      <Section id="testimonials" fullwidth>
        <Testimonials />
      </Section>
      
      <Section id="services">
        <SectionContainer><h1>Services</h1></SectionContainer>
      </Section>

      <Section id="contact">
        <SectionContainer dark><h1>Contact</h1></SectionContainer>
      </Section>
    </PageBodyContainer>
  );
}

export default Home;