import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';
// import { ImagesDesktop } from '../Shared/ImageLib';
import JFLogo from '../img/JF_Logo_White.png';
import { colours, SharedSettings } from '../Shared/SharedStyles';


const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

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
  /* width: 100%; */
  /* margin: auto; */
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

  @media(max-width: ${SharedSettings.mobile}) {
    width: 80px;
    left: calc(50% - 40px);
    top: calc(50% - 60px);
  }

  /* @media(max-width: 450px) {
    width: 50px;
    left: calc(50% - 25px);
    top: calc(50% - 30px);
  } */

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
  letter-spacing: 32px;
  text-indent: 32px;
  z-index: 1;
  font-weight: 400;
  color: ${colours.light};
  animation: ${FadeIn} 2.5s ease;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 3em;
    letter-spacing: 26px;
    text-indent: 26px;
  }

  @media(max-width: 450px) {
    font-size: 2em;
    letter-spacing: 20px;
    text-indent: 20px;
  }
`;

const bounce = keyframes`
  0% { transform: translate(0,0) rotate(45deg); }
  25% { transform: translate(0, -25px) rotate(45deg); }
  50% { transform: translate(0,0) rotate(45deg); }
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 50px;
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
  transform: rotate(45deg);
  border-bottom: 3px solid white;
  border-right: 3px solid white;
  animation: ${bounce} 1.4s infinite;
  cursor: pointer;
`;




const HeroVideo: FC = () => {
  const handleNav = (link: string): void => {
    let scrollPosition = document.getElementById(`${link}`)?.offsetTop ?? 0;

    if (link !== "intro")
        scrollPosition = scrollPosition - 100;
    
    window.scrollTo({
        left: 0,
        top: scrollPosition,
        behavior: 'smooth',
    });
  };

  return (
    <>
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
    <Arrow onClick={() => handleNav("intro")} />
    </>
  )
}

export default HeroVideo;