import React from 'react';
import styled from 'styled-components';
import { SectionContainer, SharedSettings, PageBodyContainer } from '../Shared/SharedStyles';
import About from '../Components/About';
import Testimonials from '../Components/Testimonials';
import Hero from '../Shared/Hero';
import ProductCards from '../Components/ProductCards';
import WhyUs from '../Components/WhyUs';
import Contact from '../Components/Contact';

interface SectionProps {
  fullwidth?: boolean;
  lastItem?: boolean;
}

const Section = styled.div`
  width: 100%;
  min-height: 200px;
  margin: ${(p: SectionProps) => p.fullwidth ? "20px 0 100px" : "20px 0px 100px"};
  margin-bottom: ${(p: SectionProps) => p.lastItem ? "0 !important" : null};
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
          <SectionContainer>
            <p>JF Fitness is a high end online coaching brand that specialises in Functional Fitness, through delivering online monthly subscription programmes and 1-2-1 services for all abilities.</p>
            <WhyUs />
            <ProductCards />
          </SectionContainer>
        </div>
      </Section>
      
      <Section id="about">
        <div className="wrapper">
          <About />
        </div>
      </Section>
      
      {/* <Section id="services">
        <div className="wrapper">
          
        </div>
      </Section> */}

      <Section id="ContactUs" fullwidth lastItem>
        <Contact />
      </Section>
    </PageBodyContainer>
  );
}

export default Home;