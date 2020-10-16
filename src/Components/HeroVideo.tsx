import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
// import { ImagesDesktop } from '../Shared/ImageLib';
import JFLogo from '../img/JF_Logo_White.png';
import { colours } from '../Shared/SharedStyles';


const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ffffff52;
    top: 0;
  }
`;

const Video = styled.video`
  width: 100%;
  margin: auto;
  display: block;
`;

const Logo = styled.div`
  position: absolute;
  height: 200px;
  width: 138px;
  top: calc(50% - 150px);
  left: calc(50% - 69px);
  background: url(${JFLogo});
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;

`;


const FadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(240px);
  }
  50% {
    opacity: 0;
    transform: translateY(140px);
  }
  80% {
    opacity: 0.5
  }
  100% {
    opacity: 1;
    transform: translateY(0) scaleY(1);
  }
`;

const Fitness = styled.div`
   position: absolute;
    width: 100%;
    top: 0;
    text-align: center;
    font-size: 5em;
    top: calc(50% + 85px);
    letter-spacing: 26px;
    text-indent: 26px;
    z-index: 1;
    font-weight: 300;
    color: ${colours.light};
    animation: ${FadeIn} 1.8s ease;
`;




const HeroVideo: FC = () => {
  return (
    <Container>
      <Video 
        src={`${process.env.PUBLIC_URL}/JF_Fitness_md.mp4`} 
        autoPlay
        muted
        loop
      />
      <Logo />
      <Fitness>FITNESS</Fitness>
    </Container>
  )
}

export default HeroVideo;