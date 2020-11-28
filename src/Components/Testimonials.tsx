import React, { useState, FC, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import { testimonialContent } from './TestimonialContent';

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
  min-height: 100px;
  background: rgb(255 255 255 / 0.08);
  border-radius: 5px;
  box-sizing: border-box;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
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
  
  const [seconds, setSeconds] = useState(2);
  const contentIndex = useRef(0);

  const [content, setContent] = useState<string>(testimonialContent[0].content);
  const [name, setName] = useState<string>(testimonialContent[0].name);

  const [hidden, setHidden] = useState(false);

  let updatedSeconds = seconds;
  
  const nextIndex = () => {
    console.log("Next index: ", contentIndex.current);
    contentIndex.current += 1;
    if (contentIndex.current > 2)
      contentIndex.current = 0;    

    setContent(testimonialContent[contentIndex.current]?.content);
    setName(testimonialContent[contentIndex.current]?.name);
  }


  const updateTime = () => {
    if (updatedSeconds > 0) {
      updatedSeconds--;
      console.log("Seconds: ", updatedSeconds);
    } else {
      updatedSeconds = 2;
      nextIndex();
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
    <Container>
      <TestimonialsSection >
        <Testimonial>
          {content}
          <span>{name}</span>
        </Testimonial>
        <BeforeQuote />
        <AfterQuote />
      </TestimonialsSection>
    </Container>
  );
}

export default Testimonials;