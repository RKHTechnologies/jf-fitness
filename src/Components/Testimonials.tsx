import React, { useState, FC, useEffect } from 'react';
import styled from 'styled-components';
import { SectionContainer } from '../Shared/SharedStyles';

const TestimonialsSection = styled(SectionContainer)`
  min-height: 200px;
  justify-content: center;
  overflow: hidden;
  padding: 0 20px;
  position: relative;
`;

const Testimonial = styled.div`
  font-style: italic;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  width: calc(100% - 500px);
  padding: 0 250px;
  left: 0;

  span {
    font-size: 2em;
    font-weight: 500;
    font-style: normal;
    margin-left: 40px;
    width: 360px;
  }

  p {
    margin: 0;
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

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TestimonialsSection dark>
      <Carousel xPos={xPos}>
        <Testimonial>
          <p>"We have been working with James for 3 years and have seen great improvements in overall fitness and strength levels. He always creates effective plans tailored to our goals and we love the encouragement and energy that he brings to each session, as well as the constant learning of new techniques"</p>
          <span>- Tilly &amp; Tom</span>
        </Testimonial>
        <Testimonial><p>" I've really enjoyed working with James over the past few years and feel stronger, more mobile and fitter than ever before "</p><span>- Reem</span></Testimonial>
      </Carousel>
    </TestimonialsSection>
  );
}

export default Testimonials;