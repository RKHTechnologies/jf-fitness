import React, { FC } from 'react';
import { colours, PageBodyContainer } from '../Shared/SharedStyles';
import styled from 'styled-components';
import { Overlay, ProductsGrid, TextOverlay } from './OnlinePrograms';
import Hero from '../Shared/Hero';
import { Section } from './Home';
import { PageDescription } from './E-Books/EBooks';
import { PageHeading } from '../Components/WhyUs';

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
          
          <PageHeading>What the Service Offers</PageHeading>
          <ul>
            <li>Onboarding call and mobility assessment</li>
            <li>Bespoke weekly workouts tailored towards your needs and wants</li>
            <li>Access to Truecoach app where your workouts will be delivered daily</li>
            <li>Video demonstrations</li>
            <li>Exercise history and trackable progress</li>
            <li>20 minute monthly check in calls</li>
            <li>Additional training support</li>
            <li>Nutritional advice</li>
            <li>Option of additional online PT sessions via Zoom (£70 per session)</li>
          </ul>

          
        </div>
      </Section>

      <ProductsGrid>
        test
      </ProductsGrid>
    </PageBodyContainer>
  );
}

export default OnlineCoaching;