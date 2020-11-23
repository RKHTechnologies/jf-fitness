import React, { FC } from 'react';
import { colours, PageBodyContainer } from '../Shared/SharedStyles';
import styled from 'styled-components';
import { Overlay, ProductsGrid, TextOverlay } from './OnlinePrograms';
import Hero from '../Shared/Hero';
import { Section } from './Home';
import { PageDescription } from './E-Books/EBooks';

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${colours.light};
`;

const OnlineCoaching: FC = () => {
  return (
    <PageBodyContainer>
      <Hero image="barResting" small />
      <Overlay>      </Overlay>

      <Section id="description" lastItem>
        <div className="wrapper">
          <TextOverlay>1-2-1 Online Coaching</TextOverlay>
          <PageDescription>
            The 1-2-1 online coaching service is a unique and completely bespoke functional fitness programme designed around your individual goals, needs and wants.
            <br /><br />
            This is the JF Fitness top tiered service, which has a proven track record for delivering consistently amazing results.
            <br /><br />
            Within this service, there is also the opportunity to work 1-2-1 on Zoom for additional support through your individual sessions. 
            <br /><br />
            Everyone deserves to have a successful relationship with fitness, so sign up today and start your journey.
          </PageDescription>

          
        </div>
      </Section>

      <ProductsGrid>
        test
      </ProductsGrid>
    </PageBodyContainer>
  );
}

export default OnlineCoaching;