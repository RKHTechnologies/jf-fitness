import React, { FC } from 'react';
import styled from 'styled-components';
import { SectionContainer, colours, SharedSettings } from '../Shared/SharedStyles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat, faCalendarCheck, faBalanceScaleRight, faDumbbell, faPeopleArrows, faChartLine, faMobileAlt, faRoad, faUserCheck, faUserShield } from "@fortawesome/free-solid-svg-icons";

const WhyUsSection = styled(SectionContainer)`
  min-height: 200px;
  margin-bottom: 30px;
  background: transparent;
`;

export const PageHeading = styled.div`
  font-weight: 400;
  font-size: 2.5em;
  margin: 20px auto;
  color: rgb(255 255 255 / 0.88);
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
`;

export const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  color: ${colours.dark};

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const GridItem = styled.div`
  display: grid;
  grid-gap: 25px 0;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 
    'icon title'
    'icon description';
  position: relative;

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 50px 1fr;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  grid-area: icon;
  height: 50px;
  border-radius: 50%;
  margin: 7px 15px 0px;
  color: ${colours.primary};
  position: absolute;
  right: 0;

  @media(max-width: ${SharedSettings.mobile}) {
    margin: 7px 8px 0;
  }
`;

export const Title = styled.h2`
  grid-area: title;
  width: 110%;
  margin-top: 21px;
  margin-bottom: 0;
  color: rgb(255 255 255 / 0.88);
  font-weight: 300;
  text-transform: uppercase;
  font-size: 1.2em;

  @media(max-width: ${SharedSettings.mobile}) {
    width: 95%;
    padding-left: 15px;
  }
`;

export const Description = styled.p`
  grid-area: description;
  width: 85%;
  margin-top: 5px;
  line-height: 24px;
`;



const WhyUs: FC = () => {
 
  return (
    <WhyUsSection dark>
      <PageHeading>Why JF Fitness?</PageHeading>
      <Grid>
        <GridItem>
          <Icon icon={faCalendarCheck} size="2x" />
          <Title>Bespoke Programs to fit your schedule</Title>
        </GridItem>
        
        <GridItem>
          <Icon icon={faRoad} size="2x" />
          <Title>Journey centric training plans</Title>
        </GridItem>

        <GridItem>
          <Icon icon={faBalanceScaleRight} size="2x" />
          <Title>Results driven</Title>
        </GridItem>

        <GridItem>
          <Icon icon={faDumbbell} size="2x" />
          <Title>Tried and tested workouts</Title>
        </GridItem>

        <GridItem>
          <Icon icon={faPeopleArrows} size="2x" />
          <Title>1-2-1 online support</Title>
        </GridItem>

        <GridItem>
          <Icon icon={faUserShield} size="2x" />
          <Title>Accountability</Title>
        </GridItem>

        <GridItem>
          <Icon icon={faChartLine} size="2x" />
          <Title>Growth and progression tracking</Title>
        </GridItem>

        <GridItem>
          <Icon icon={faMobileAlt} size="2x" />
          <Title>Workouts delivered direct to your phone</Title>
        </GridItem>

        <GridItem>
          <Icon icon={faHeartbeat} size="2x" />
          <Title>Functional fitness</Title>
        </GridItem>
      </Grid>
    </WhyUsSection>
  );
}

export default WhyUs;