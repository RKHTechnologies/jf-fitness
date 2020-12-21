import React, { FC } from 'react';
import { colours, PageBodyContainer } from '../Shared/SharedStyles';
import styled from 'styled-components';
import { HashTagMini, Overlay, TextOverlay } from './OnlinePrograms';
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

const CoachingDescription = styled(PageDescription)`
  margin: auto;
  text-align: center;
  font-weight: 300;
  color: rgb(255 255 255 / 0.62);
`;


const Card = styled.div`
  width: 800px;
  background: rgba(255,255,255,0.12);
  border-radius: 10px;
  margin: auto;
  color: rgb(255 255 255 / 0.7);
  font-weight: 100;
  font-size: 1.2em;
  padding: 20px;
`;

const ItemTitle = styled.h1`
  color: ${colours.primary};
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  font-size: 1.8em;

  &:not(:first-child) {
    margin-top: 80px;
  }
`;


const OnlineCoaching: FC = () => {
  return (
    <>
      <PageBodyContainer>
        <Hero image="barResting" small />
        <Overlay />

        <Section id="description">
          <div className="wrapper">
            <TextOverlay>1-2-1 Online Coaching</TextOverlay>
            <CoachingDescription>
              The 1-2-1 online coaching service is a unique and <span>completely bespoke</span> functional fitness programme designed around  our individual goals, needs and wants.
              <br /><br />
              This is the JF Fitness <span>top tiered</span> service, which has a proven track record for delivering consistently <span>amazing results</span>.
              <br /><br />
              Within this service, there is also the opportunity to <span>work 1-2-1</span> on Zoom for additional support through your individual sessions. 
              <br /><br />
              Everyone deserves to have a successful relationship with fitness, so sign up today and start your journey.
              <br /><br />
              <HashTagMini>#BeYourOwnAthlete</HashTagMini>
            </CoachingDescription>
          </div>
        </Section>  

        <Section id="whatServiceOffers" fullwidth>
          <div className="wrapper">
            <Card>
              <ItemTitle>What the service Offers</ItemTitle>
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

              <ItemTitle>How it Works</ItemTitle>
              <p>
                Once you have taken the next step on your fitness journey, by purchasing a 1-2-1 online coaching programme, you will be contacted to arrange an onboarding call, to discuss your goals, wants and needs.
                <br /><br />
                From there, a personalised  programme will be created and the road towards a successful fitness journey will begin….
              </p>

              <ItemTitle>What you will need</ItemTitle>
              <ul>
                <li>Access to a gym</li>
              </ul>


            </Card>
          </div>
        </Section>
      </PageBodyContainer>

      {/* <PageHeading>What the Service Offers</PageHeading>
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
        </ul> */}
    </>
  );
}

export default OnlineCoaching;