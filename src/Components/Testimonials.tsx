import React, { useState, FC, useEffect } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex; 
  align-items: center;
  justify-content: flex-end;
`;

const TestimonialsSection = styled.div`
  position: relative;
  width: 500px;
  height: 60%;
  background: ${colours.dark};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Testimonial = styled.div`
  font-style: italic;
  color: ${colours.light};
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