import React from 'react';
import styled from 'styled-components';
import gym1 from '../gym1.jpeg';
import { colours } from '../Shared/SharedStyles';

const ImageContainer = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${gym1});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

interface HeaderProps {
  white?: boolean;
}

const MainHeading = styled.div`
  font-size: 8.5em;
  font-weight: 800;
  color: ${(p: HeaderProps) => p.white ? colours.light : colours.dark};
  text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
`;

const LandingSection: React.FC = () => {


  return (
    <ImageContainer>
      <MainHeading >Fitness.</MainHeading>
      <MainHeading>Results Driven.</MainHeading>
      <MainHeading>Client Centric.</MainHeading>
    </ImageContainer>
  );
};

export default LandingSection;