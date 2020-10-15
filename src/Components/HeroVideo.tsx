import React, { FC } from 'react';
import styled from 'styled-components';
import { ImagesDesktop } from '../Shared/ImageLib';
import JFLogo from '../img/JF_Logo.png';


const Container = styled.div`
  width: 100%;
  height: 80%;
  overflow: hidden;
  position: relative;

  &:after {
    content: 'FITNESS';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ffffff52;
    top: 0;
    text-align: center;
    /* padding-top: 100%; */
    font-size: 5em;
    padding-top: 450px;
    letter-spacing: 33px;
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
  width: 200px;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  background: url(${JFLogo});
  background-size: contain;
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
    </Container>
  )
}

export default HeroVideo;