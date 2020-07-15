import React from 'react';
import HeaderBar from './HeaderBar';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';
import GlobalStyle from '../Shared/GlobalStyle';
import MetricTest from "./MetricTest";

const ContentContainer = styled.div`
  position: absolute;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  border-top: 1px solid ${colours.lightGrey};
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

interface ExampleProps {
  dark?: boolean;
}

const Example = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: ${(p: ExampleProps) => p.dark ? colours.dark : colours.light};
  color: ${(p: ExampleProps) => p.dark ? colours.light : colours.dark};
  font-size: 3em;
  font-weight: 100;
`;

const Home: React.FC = () => {
  
  return (
    <>
      <GlobalStyle />
      <HeaderBar stickyHeader />
      <ContentContainer>
        <Section id="about">
          <MetricTest />
        </Section>
        
        <Section id="testemonials">
          <Example dark>Testemonials</Example>
        </Section>

        <Section id="partners">
          <Example>Partners</Example>
        </Section>

        <Section id="services">
          <Example dark>Services</Example>
        </Section>

        <Section id="contact">
          <Example>Contact</Example>
        </Section>

      </ContentContainer>
    </>
  );
}

export default Home;