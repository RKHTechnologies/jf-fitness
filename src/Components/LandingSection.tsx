import React from 'react';
import styled from 'styled-components';
import gym2 from '../gym2.jpg';
import jf from '../JF_logo_White.png';
import { colours } from '../Shared/SharedStyles';

const ImageContainer = styled.div`
  width: 100%;
  height: calc(100vh - 81px);
  background-image: url(${gym2});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 10%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
`;

const LogoContainer = styled.div`
  width: 8vw;
  height: 22vw;
  position: absolute;
  left: calc(50vw - 4vw);
  top: calc(50% - 5vw);
  background-image: url(${jf});
  background-size: contain;
  background-repeat: no-repeat;
`;

interface HeaderProps {
  white?: boolean;
}

const MainHeading = styled.div`
  font-size: 5.5vw;
  font-weight: 800;
  color: ${(p: HeaderProps) => p.white ? colours.light : colours.light};
  margin-right: 30px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
`;

const LandingSection: React.FC = () => {


  return (
    <ImageContainer>
      <MainHeading>Fitness.</MainHeading>
      <MainHeading>Results Driven.</MainHeading>
      <MainHeading>Client Centric.</MainHeading>
      <LogoContainer />
    </ImageContainer>
  );
};

export default LandingSection;