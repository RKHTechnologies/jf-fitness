import React from 'react';
import styled from 'styled-components';
import { ImagesDesktop } from '../Shared/ImageLib';
import { colours, SharedSettings } from '../Shared/SharedStyles';

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
  font-size: 1.6em;
  font-weight: 100;
  color: rgb(255 255 255 / 0.8);
  line-height: 30px;

  @media(max-width: ${SharedSettings.mobile}) {
    margin-top: 70px;
    font-size: 1.3em;
  }
`;

const SideImage = styled.div`
  width: 96%;
  height: 96%;
  background: url(${ImagesDesktop['i6211']});
  background-size: cover;
  margin: auto 0 auto auto;
`;

export const HashTag = styled.div`
  font-size: 1.6em;
  color: ${colours.primary};
  margin-top: 30px;
  font-style: italic;
  
  @media(max-width: 1100px) {
    margin: 30px 20px 0;
    font-size: 1.4em;
  }
  
  @media(max-width: 500px) {
    margin: 30px 0 0;
  }
`;

export const HashTagMini = styled(HashTag)`
  font-size: 1.2em !important;
  margin: 15px 0 !important;
`;

const About: React.FC = () => {
  return (
    <Container>
      <AboutUs>
        JF FITNESS places functional fitness at the center of success.
        <br />
        <br />
        With over 7 years of personal training experience and a passion for seeing clients grow, JF Fitness has created a range of accessible online products, which are a guaranteed to improve mobility, build strength and muscle, burn fat and develop athletic capacity, all in a challenging and safe manner. 
        <br />
        <br />
        From completely bespoke 1-2-1 online coaching through to 12-week functional fitness programmes, JF Fitness has the solution to help you reach and break through your goals. 
        <br />
        <br />
        Everyone has their own unique inner athlete, so take the necessary action today and JF Fitness will help unlock yours.
        <HashTagMini>#BeYourOwnAthlete</HashTagMini>
      </AboutUs>
      <SideImage />
    </Container>
  );
}

export default About;