import React from 'react';
import styled from 'styled-components';
import { SectionContainer } from '../Shared/SharedStyles';

const TestimonialsSection = styled(SectionContainer)`
  height: calc(25vh - 81px);
  min-height: auto;
  justify-content: center;
`;

const Testimonial = styled.div`
  font-style: italic;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 2em;
    font-weight: 500;
    font-style: normal;
  }
`;


const Testimonials: React.FC = () => {
  return (
    <TestimonialsSection dark>
      <Testimonial><p>" I've really enjoyed working with James over the past few years and feel stronger, more mobile and fitter than ever before "</p><span>Reem</span></Testimonial>
      
    </TestimonialsSection>
  );
}

export default Testimonials;