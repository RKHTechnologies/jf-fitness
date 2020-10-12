import React, { FC } from 'react';
import { colours, PageBodyContainer, SharedSettings } from '../Shared/SharedStyles';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { imageLib, ImagesDesktop } from '../Shared/ImageLib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faDumbbell, faHeartbeat, faPoundSign } from '@fortawesome/free-solid-svg-icons';

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TextOverlay = styled.div`
  font-size: 6vw;
  font-weight: 400;
  width: 100%;
  height: 65%;
  color: ${colours.light};
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.15);

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 10vw;
    font-weight: 600;
  }

  @media(max-width: 700px) {
    height: 300px;
  }  
`;

const ProductsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 40px;
  padding-top: 20px;
  box-sizing: border-box;
  grid-gap: 20px;
  background: #0E0F14;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  margin-bottom: 1000px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.10);
  }
`;

interface ImageProps {
  image: imageLib;
}

const Image = styled.div`
  width: 100%;
  background: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 10px;
  border-radius: 5px;
  min-height: 400px;
`;

const Title = styled.h1`
  width: 100%;
  color: ${colours.light};
  font-size: 2.6em;
  font-weight: 400;
  margin: 10px 0;
`;

const Overview = styled.div`
  width: 100%;
  color: ${colours.darkGrey};
  text-align: justify;
  font-size: 1.2em;
`;

const SubHeading = styled.div`
  color: ${colours.light};
  font-weight: 400;
  font-size: 1.8em;
  margin-top: 40px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  div {
    margin-top: 6px;
  }
`;

const Price = styled(SubHeading)`
  color: ${colours.primary};
`;

export const Icon = styled(FontAwesomeIcon)`
  height: 32px;
  color: ${colours.light};
  margin-right: 20px;
  min-width: 32px;
`;


const List = styled.ul`
  color: ${colours.darkGrey};
  font-size: 1.2em;
`;



const OnlinePrograms: FC = () => {
  return (
    <PageBodyContainer>
      <Hero image="gym" small />
      <TextOverlay>Online Programs</TextOverlay>

      <ProductsGrid>
        
        <Product>
          <Image image={"gym"} />
          <Title>Functional Fitness</Title>
          <Overview>Train the JF Fitness way, learn to use Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Overview>
          
          <SubHeading>
            <Icon icon={faCalendarCheck} />
            <div>Requirements</div>
          </SubHeading>
          <Overview>You're keen to get started, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </Overview>          

          <SubHeading>
            <Icon icon={faDumbbell} />
            <div>Equipment</div>
          </SubHeading>
          <Overview>You will access to at least one of the following, the more the better:</Overview>
          <List>
            <li>Dumbbell</li>
            <li>Kettlebell</li>
            <li>Pull Up Bar</li>
            <li>Rowing Machine</li>
            <li>Running Machine</li>
          </List>

          <SubHeading>
            <Icon icon={faHeartbeat} />
            <div>What to Expect</div>
          </SubHeading>
          <Overview>This program is designed to take your fitness to the next level, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</Overview>

          <Price>
            <Icon icon={faPoundSign} />
            <div>123</div>
          </Price>
        </Product>
        
        <Product>
          <Image image={"gym"} />
          <Title>Strength Building</Title>
          <Overview>When it comes to building core strength, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Overview>
          <SubHeading>
            <Icon icon={faCalendarCheck} />
            <div>Requirements</div>
          </SubHeading>
          <Overview>You're keen to get started, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </Overview>          

          <SubHeading>
            <Icon icon={faDumbbell} />
            <div>Equipment</div>
          </SubHeading>
          <Overview>You will access to at least one of the following, the more the better:</Overview>
          <List>
            <li>Dumbbell</li>
            <li>Kettlebell</li>
            <li>Pull Up Bar</li>
            <li>Rowing Machine</li>
            <li>Running Machine</li>
          </List>

          <SubHeading>
            <Icon icon={faHeartbeat} />
            <div>What to Expect</div>
          </SubHeading>
          <Overview>This program is designed to take your fitness to the next level, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</Overview>
        </Product>

        <Product>
          <Image image={"gym"} />
          <Title>Performance Gains</Title>
          <Overview>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Overview>

          <SubHeading>
            <Icon icon={faCalendarCheck} />
            <div>Requirements</div>
          </SubHeading>
          <Overview>You're keen to get started, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </Overview>          

          <SubHeading>
            <Icon icon={faDumbbell} />
            <div>Equipment</div>
          </SubHeading>
          <Overview>You will access to at least one of the following, the more the better:</Overview>
          <List>
            <li>Dumbbell</li>
            <li>Kettlebell</li>
            <li>Pull Up Bar</li>
            <li>Rowing Machine</li>
            <li>Running Machine</li>
          </List>

          <SubHeading>
            <Icon icon={faHeartbeat} />
            <div>What to Expect</div>
          </SubHeading>
          <Overview>This program is designed to take your fitness to the next level, Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</Overview>
        </Product>

      </ProductsGrid>
    </PageBodyContainer>
  );
}

export default OnlinePrograms;