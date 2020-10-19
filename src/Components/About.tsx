import React from 'react';
import styled from 'styled-components';
import { SharedSettings } from '../Shared/SharedStyles';
import Testimonials from './Testimonials';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 600px;

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const AboutUs = styled.div`
  text-align: justify;
  font-size: 1.8em;
  font-weight: 100;
  color: rgb(255 255 255 / 0.88);

  @media(max-width: ${SharedSettings.mobile}) {
    margin-top: 70px;
    font-size: 1.3em;
  }
`;

const About: React.FC = () => {
  return (
    <Container>
      <AboutUs>
        JF FITNESS places health and wellbeing at the center of success.
        <br />
        <br />
        With over 6 years of personal training expereince and a passion for seeing clients grow and progress, James Fisher has created a range of accessible online programmes for all breadth of abilities. From dynamic subscription-based training programmes through to bespoke 1-2-1 online plans, JF Fitness has the solution to help you reach - and break through - your goals in a supportive environment.
        <br />
        <br />
        With a considered and structured approach to each plan and session, JF Fitness focuses on functional fitness and movement and ensures this meets your intentions and needs.
        <br />
        <br />
        Everyone has their own, unique inner athlete. JF Fitness can help unlock and unleash yours.
      </AboutUs>
      <Testimonials />
    </Container>
  );
}

export default About;