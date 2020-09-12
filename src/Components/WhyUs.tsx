import React, { FC } from 'react';
import styled from 'styled-components';
import { SectionContainer } from '../Shared/SharedStyles';

const TestimonialsSection = styled(SectionContainer)`
  min-height: 200px;
  justify-content: center;
  overflow: hidden;
  padding: 0 20px;
  position: relative;
`;

const WhyUs: FC = () => {
 
  return (
    <TestimonialsSection dark>
      Why us
    </TestimonialsSection>
  );
}

export default WhyUs;