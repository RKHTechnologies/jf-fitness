import React, { FC } from 'react';
import styled from 'styled-components';
// import { ImagesDesktop } from '../Shared/ImageLib';
import JFLogo from '../img/JF_Logo.png';


const Container = styled.div`
  width: 100%;
  height: 80%;
  overflow: hidden;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ffffff52;
    top: 0;
    /* text-align: center;
    font-size: 5em;
    padding-top: 450px;
    top: calc(50% + 167px);
    letter-spacing: 33px;
    text-indent: 33px; */
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
  top: calc(50% - 130px);
  left: calc(50% - 69px);
  background: url(${JFLogo});
  background-size: contain;
  z-index: 1;
`;

const Fitness = styled.div`
   position: absolute;
    width: 100%;
    top: 0;
    text-align: center;
    font-size: 5em;
    top: calc(50% + 105px);
    letter-spacing: 33px;
    text-indent: 33px;
    z-index: 1;
`;

const HeroVideo: FC = () => {
  return (
    <Container>
      <Video 
        src={`${process.env.PUBLIC_URL}/JF_Fitness.mp4`} 
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