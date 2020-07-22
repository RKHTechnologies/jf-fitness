import React, { useState } from 'react';
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
    width: 220px;
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


const Testimonials: React.FC = () => {
  const [xPos, setXPos] = useState(50);
  const [counter, setCounter] = useState(2);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <TestimonialsSection dark>
      <Carousel xPos={xPos}>
        <Testimonial>
          <p>counter</p>
          <p>"We have been working with James for 3 years and have seen great improvements in overall fitness and strength levels. He always creates effective plans tailored to our goals and we love the encouragement and energy that he brings to each session, as well as the constant learning of new techniques"</p>
          <span>- Tilly &amp; Tom</span>
        </Testimonial>
        <Testimonial><p>" I've really enjoyed working with James over the past few years and feel stronger, more mobile and fitter than ever before "</p><span>- Reem</span></Testimonial>
      </Carousel>
    </TestimonialsSection>
  );
}

export default Testimonials;