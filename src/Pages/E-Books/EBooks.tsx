import React, { FC } from 'react';
import { colours, PageBodyContainer, SharedSettings } from '../../Shared/SharedStyles';
import styled from 'styled-components';
import Hero from '../../Shared/Hero';
import { Overlay, TextOverlay } from '../OnlinePrograms';
import { Image } from '../../Pages/OnlinePrograms';
import { useHistory } from 'react-router';
import { Title } from './EBook';
import { Section } from '../Home';

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const PageDescription = styled.div`
  text-align: justify;
  font-size: 1.8em;
  font-weight: 100;
  color: rgb(255 255 255 / 0.7);
  margin-top: 20px;
`;

const CardsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 250px 100px;
  box-sizing: border-box;
  grid-gap: 50px;
  background: #121212;
  position: relative;
  color: white;

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
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.10);
  }
`;

const Heading = styled.h1`
  width: 100%;
  color: #FFF;
  font-size: 2.2em;
  font-weight: 400;
  margin: 16px 0 5px;
  text-transform: uppercase;
  text-align: center;
`;

const Description = styled.div`
    font-weight: 300;
    text-align: justify;
    padding: 0 6px 42px;
    color: #818999;
`;

export const Button = styled.div`
  color: ${colours.primary};
  background: ${colours.primary}40;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 14px 26px 5px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  width: calc(100% - 75px);

  &:hover {
    background: ${colours.primary};
    color: rgb(255 255 255 / 0.90);
  }
`;


const EBooks: FC = () => {

  const history = useHistory();

  const handleNav = (link: string): void => {
      history.push(`${process.env.PUBLIC_URL}${link}`);
  }

  return (
    <PageBodyContainer>
      <Hero image="i5478" small imageHeight="0" />
      <Overlay>
        <TextOverlay>E-BOOKS</TextOverlay>
      </Overlay>

      <Section id="description" lastItem>
        <div className="wrapper">
          <Title>
            Looking for workout inspiration?
          </Title>
          <PageDescription>
            These downloadable E-books which have been tried and tested by the JF Fitness team are a great addition to any workout or can be used separately as stand alone workouts.
            <br /><br />
            They bring intensity, inspiration and a serious challenge to your sessions.
          </PageDescription>
        </div>
      </Section>

      <CardsGrid>
        <Card onClick={() => handleNav("/ebooks/1")}>
          <Image image={"i6969"} />
          <Heading>Bodyweight Finishers</Heading>
          <Description>
            Train the JF Fitness way, learn to use Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Description>
          <Button onClick={() => handleNav("/ebooks/1")}>Find out more</Button>
        </Card>

        <Card onClick={() => handleNav("/ebooks/2")}>
          <Image image={"i5496"} />
          <Heading>AMRAP's &amp; EMOM's</Heading>  
          <Description>
            When it comes to building core strength, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Description>
          <Button onClick={() => handleNav("/ebooks/2")}>Find out more</Button>
        </Card>

        <Card onClick={() => handleNav("/ebooks/3")}>
          <Image image={"i6107"} />
          <Heading>DB Only Workouts</Heading>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </Description>
          <Button onClick={() => handleNav("/ebooks/3")}>Find out more</Button>
        </Card>

      </CardsGrid>
    </PageBodyContainer>
  );
}

export default EBooks;