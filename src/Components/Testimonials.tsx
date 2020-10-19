import React, { useState, FC, useEffect } from 'react';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex; 
  align-items: center;
  justify-content: flex-end;

  @media(max-width: ${SharedSettings.mobile}) {
    justify-content: center;
    margin-top: 40px;
  }
`;

const TestimonialsSection = styled.div`
  position: relative;
  width: 500px;
  height: 290px;
  background: rgb(255 255 255 / 0.08);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* box-shadow: 0 2.8px 2.2px rgb(255 255 255 / 3%), 0 6.7px 5.3px rgb(255 255 255 / 5%), 0 12.5px 10px rgb(255 255 255 / 6%), 0 22.3px 17.9px rgb(255 255 255 / 7%), 0 41.8px 33.4px rgb(255 255 255 / 9%), 0 100px 80px rgb(255 255 255 / 12%); */
  box-shadow: 0 2.8px 2.2px rgba(0,0,0,0.034), 0 6.7px 5.3px rgba(0,0,0,0.048), 0 12.5px 10px rgba(0,0,0,0.06), 0 22.3px 17.9px rgba(0,0,0,0.072), 0 41.8px 33.4px rgba(0,0,0,0.086), 0 100px 80px rgba(0,0,0,0.12);

  @media(max-width: 540px) {
    width: 100%;
    height: auto;
    padding: 30px 20px 50px; 
  }
`;

const Testimonial = styled.div`
  font-style: italic;
  color: rgb(255 255 255 / 0.88);
  font-size: 1.4em;
  text-align: justify;

  &:before {
    content: '"';
    position: absolute;
    color: ${colours.primary};
    margin-top: -27px;
    margin-left: -50px;
    font-size: 3em;
    font-family: fantasy;
  }
  
  &:after {
    content: '"';
    position: absolute;
    color: ${colours.primary};
    margin-bottom: 27px;
    margin-right: 50px;
    font-size: 3em;
    font-family: fantasy;
  }

  span {
    position: absolute;
    bottom: 15px;
    right: 50px;
  }

  @media(max-width: 540px) {
    font-size: 1.2em;

    &:before {
      font-size: 2em;
      margin-top: -22px;
      margin-left: -24px;
    }

    &:after {
      font-size: 2em;
    }
  }
`;

interface CarouselProps {
  xPos?: number;
}

const Carousel = styled.div`
    display: flex;
    width: 200%;
    padding-top: 12px;
    transition: all 0.5s ease;
    transform: ${(p: CarouselProps) => p.xPos ? `translateX(-${p.xPos}%)` : 0};
`;

const Testimonials: FC = () => {
  
  const [seconds, setSeconds] = useState(5);
  const [xPos, setXPos] = useState(50);

  let updatedSeconds = seconds;
  let updatedXPos = xPos;

  const updateTime = () => {
    if (updatedSeconds > 0) {
      updatedSeconds--;
      console.log(`Updated Seconds: ${updatedSeconds}, xPos: ${updatedXPos}`);
    } else {
      updatedSeconds = 5;
      if (updatedXPos === 50) {
        setXPos(0);
        updatedXPos = 0;
      } else {
        setXPos(50);
        updatedXPos = 50;
      } 
    }
    return setSeconds(updatedSeconds);
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     updateTime();
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <Container>
      <TestimonialsSection>
        <Testimonial>
          We have been working with James for 3 years and have seen great improvements in overall fitness and strength levels. He always creates effective plans tailored to our goals and we love the encouragement and energy that he brings to each session, as well as the constant learning of new techniques
          <span>- Tilly &amp; Tom</span>
        </Testimonial>
        {/* <Testimonial>
          I've really enjoyed working with James over the past few years and feel stronger, more mobile and fitter than ever before
          <span>- Reem</span>
        </Testimonial> */}
      </TestimonialsSection>
    </Container>
  );
}

export default Testimonials;