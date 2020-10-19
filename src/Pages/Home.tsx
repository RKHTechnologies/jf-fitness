import React from 'react';
import styled from 'styled-components';
import { SectionContainer, SharedSettings, PageBodyContainer } from '../Shared/SharedStyles';
import About from '../Components/About';
// import Testimonials from '../Components/Testimonials';
// import Hero from '../Shared/Hero';
// import ProductCards from '../Components/ProductCards';
import WhyUs from '../Components/WhyUs';
import Contact from '../Components/Contact';
import HeroVideo from '../Components/HeroVideo';
import Services from '../Components/Services';

const Container = styled(PageBodyContainer)`
  top: 0;
`;

interface SectionProps {
  fullwidth?: boolean;
  lastItem?: boolean;
  topSpace?: boolean;
}

const Section = styled.div`
  width: 100%;
  min-height: 200px;
  margin: 20px 0 100px;
  margin-bottom: ${(p: SectionProps) => p.lastItem ? "0 !important" : null};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding-top: ${(p: SectionProps) => p.topSpace ? "100px" : null};

  div.wrapper {
    width: 96%;
    max-width: ${SharedSettings.maxWidth};
    display: flex;
    flex-wrap: wrap;
  }

  @media(max-width: 1100px) {
    padding: 20px 0 50px;
    margin-bottom: 0;
  }
`;

interface IProps {
  updateSticky: () => void;
}

const Home: React.FC<IProps> = ({updateSticky}: IProps) => {
  
  updateSticky();

  return (
    <Container>
      <HeroVideo />
      
      <Section id="intro" topSpace>
        <div className="wrapper">
          <About />
        </div>
      </Section>

      <Section id="whyus">
        <div className="wrapper">
          <WhyUs />
          {/* <p>JF FITNESS is a high end online coaching brand that specialises in Functional Fitness, through delivering online monthly subscription programmes and 1-2-1 services for all abilities.</p> */}  
          {/* <ProductCards /> */}
        </div>
      </Section>

      <Section id="services" fullwidth>
        <Services />
      </Section>
      

      <Section id="ContactUs" fullwidth lastItem>
        <Contact />
      </Section>
    </Container>
  );
}

export default Home;