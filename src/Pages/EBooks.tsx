import React, { FC } from 'react';
import { colours, PageBodyContainer, SharedSettings } from '../Shared/SharedStyles';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { Overlay, TextOverlay } from './OnlinePrograms';
import { Image } from '../Pages/OnlinePrograms';

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const CardsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px 250px 100px;
  box-sizing: border-box;
  grid-gap: 50px;
  background: #121212;
  position: relative;
  color: white;

  &:before { 
    content: '';
    position: absolute;
    top: -200px;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(180deg, rgba(18,18,18,0) 0%, rgb(18 18 18) 100%);
  }

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 1fr;
  }

  @media(max-width: 800px) {
    padding: 0 10px;
  }
`;

const Card = styled.div`
  margin-top: 50px;
  border-radius: 10px;
  background: rgba(255,255,255, 0.12);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  padding: 12px;
  position: relative;
`;

const Heading = styled.h1`
  width: 100%;
  color: #FFF;
  font-size: 2.2em;
  font-weight: 300;
  margin: 16px 0 5px;
  text-transform: uppercase;
  text-align: center;
`;

const Button = styled.div`
  color: ${colours.primary};
  background: ${colours.primary}40;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 14px 26px 5px;
  cursor: pointer;

  &:hover {
    background: ${colours.primary};
    color: rgb(255 255 255 / 0.90);
  }
`;


const EBooks: FC = () => {
  return (
    <PageBodyContainer>
      <Hero image="barResting" small />
      <Overlay>
        <TextOverlay>E-BOOKS</TextOverlay>
      </Overlay>
      <CardsGrid>

        <Card>
          <Image image={"boxJump"} />
          <Heading>Home Workouts</Heading>
          <Button>Find out more</Button>
        </Card>

        <Card>
          <Image image={"boxJump"} />
          <Heading>Fitness Pro</Heading>
          <Button>Find out more</Button>
        </Card>

        <Card>
          <Image image={"boxJump"} />
          <Heading>The Complete edition</Heading>
          <Button>Find out more</Button>
        </Card>

      </CardsGrid>
    </PageBodyContainer>
  );
}

export default EBooks;