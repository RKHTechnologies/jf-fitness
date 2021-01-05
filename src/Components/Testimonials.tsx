import React, { useState, FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import { testimonialContent } from './TestimonialContent';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex; 
  align-items: center;
  justify-content: center;
  perspective: 1000px;

  @media(max-width: ${SharedSettings.mobile}) {
    justify-content: center;
    margin-top: 40px;
  }
`;

interface IProps {
  flipped: boolean;
}

const TestimonialsSection = styled.div`
  position: relative;
  width: 500px;
  min-height: 250px;
  background: rgb(255 255 255 / 0.08);
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2.8px 2.2px rgba(0,0,0,0.034), 0 6.7px 5.3px rgba(0,0,0,0.048), 0 12.5px 10px rgba(0,0,0,0.06), 0 22.3px 17.9px rgba(0,0,0,0.072), 0 41.8px 33.4px rgba(0,0,0,0.086), 0 100px 80px rgba(0,0,0,0.12);
  
  transition: all 0.6s ease;
  transform-style: preserve-3d;
  transform: ${(p: IProps) => p.flipped ? "rotateY(180deg)" : "rotateY(0)"};

  @media(max-width: 540px) {
    width: 100%;
    height: auto;
    padding: 30px 20px 50px; 
  }
`;

const CardFront = styled.div`
  padding: 50px;
  backface-visibility: hidden;
  -ms-backface-visibility: visible;
  position: absolute;
  transform: rotateY(0deg);
`;

const CardBack = styled(CardFront)`
  transform: rotateY(-180deg);
`;

const Testimonial = styled.div`
  font-style: italic;
  color: rgb(255 255 255 / 0.88);
  font-size: 1.4em;
  text-align: justify;

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

const BeforeQuote = styled.div`
  &:before {
    content: '“';
    color: ${colours.primary};
    position: absolute;
    top: -20px;
    left: 30px;
    font-size: 8em;
    z-index: -1;
    font-family: 'Oswald';
    opacity: 0.3;
  }
`;


const AfterQuote = styled.div`
  &:after {
    content: '”';
    color: ${colours.primary};
    position: absolute;
    font-size: 8em;
    z-index: -1;
    font-family: 'Oswald';
    opacity: 0.3;
    bottom: -54px;
    right: 26px;
  }
`;

const Testimonials: FC = () => {
  
  const timerSeconds = 4;
  const seconds = useRef(timerSeconds);
  const contentIndex = useRef(0);
  const flipped = useRef(false);
  const [content, setContent] = useState<string>(testimonialContent[0].content);
  const [name, setName] = useState<string>(testimonialContent[0].name);
  const [contentFlip, setContentFlip] = useState<string>(testimonialContent[1].content);
  const [nameFlip, setNameFlip] = useState<string>(testimonialContent[1].name);
  

  const nextIndex = () => {    
    contentIndex.current += 1;
    if (contentIndex.current > 4) contentIndex.current = 0;    

    flipped.current = !flipped.current;

    setTimeout(function() {
      setContent(testimonialContent[contentIndex.current]?.content);
      setName(testimonialContent[contentIndex.current]?.name);
    }, 500);
  }


  const timer = () => {
    setTimeout(() => {
      seconds.current--;
      
      if (seconds.current <= 0) {
        seconds.current = timerSeconds;
        nextIndex();
      }

      timer();
    }, 1000);
  }


  // Init
  useEffect(() => {
    timer();
  }, []);
  

  return (
    <Container>
      <TestimonialsSection flipped={flipped.current}>
        <CardFront>
          <Testimonial>
            {content}
            <span>{name}</span>
          </Testimonial>
          <BeforeQuote />
          <AfterQuote />
        </CardFront>

        <CardBack>
          <Testimonial>
            {content}
            <span>{name}</span>
          </Testimonial>
          <BeforeQuote />
          <AfterQuote />
        </CardBack>
      </TestimonialsSection>
    </Container>
  );
}

export default Testimonials;