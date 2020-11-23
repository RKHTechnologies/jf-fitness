import React, { FC } from 'react';
import { colours, PageBodyContainer, SharedSettings } from '../Shared/SharedStyles';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { imageLib, ImagesDesktop } from '../Shared/ImageLib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faDumbbell, faHeartbeat, faPoundSign } from '@fortawesome/free-solid-svg-icons';
import { PageDescription } from './E-Books/EBooks';
import { Section } from './Home';

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 65%;
  background: rgba(255,255,255,0.15);
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after { 
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(180deg, rgba(18,18,18,0) 0%, rgb(18 18 18) 100%);
  }
`;

export const TextOverlay = styled.div`
  font-size: 5vw;
  font-weight: 400;
  color: ${colours.primary};
  text-transform: uppercase;
  line-height: 56px;
  background: #1f1f1f;
  margin: 10px auto 40px;
  padding: 29px 19px 0;
  font-weight: 200;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 10vw;
    font-weight: 600;
  }

  @media(max-width: 700px) {
    height: 300px;
  }  
`;

export const ProductsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 40px;
  padding-top: 20px;
  box-sizing: border-box;
  grid-gap: 20px;
  background: #121212;
  position: relative;

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 1fr;
  }

  @media(max-width: 800px) {
    padding: 0 10px;
  }
`;

const HashTag = styled.div`
  font-size: 1.6em;
  color: ${colours.primary};
  margin-top: 30px;
  font-style: italic;
`;

const Product = styled.div`
  flex-direction: column;
  padding: 20px;
  padding-bottom: 100px;
  border-radius: 10px;
  transition: transform 0.3s ease;
  margin-bottom: 80px;
  background: rgba(255,255,255, 0.12);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  position: relative;
  display: grid;  
  grid-template-areas: 
    'image title'
    'image overview'
    'image requirements'
    'image equipment'
    'image expect';
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  grid-row-gap: 0;
`;

interface ImageProps {
  image: imageLib;
}

export const Image = styled.div`
  grid-area: image;
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
  grid-area: title;
  width: 100%;
  color: ${colours.primary};
  font-size: 4em;
  font-weight: 300;
  margin: 0;
  text-transform: uppercase;
`;

const Overview = styled.div`
  width: 100%;
  color: rgb(255 255 255 / 0.7);
  text-align: justify;
  font-size: 1.2em;
  font-weight: 100;
`;

interface ISectionProps {
  height: number;
}

const ProductSection = styled.div`
  min-height: ${(p: ISectionProps) => p.height}px;
`;

const OverviewSection = styled(ProductSection)`
  grid-area: overview;
`;
const Requirements = styled(ProductSection)`
  grid-area: requirements;
`;
const Equipment = styled(ProductSection)`
  grid-area: equipment;
`;
const Expect = styled(ProductSection)`
  grid-area: expect;
`;

const SubHeading = styled.div`
  color: ${colours.light};
  font-weight: 400;
  font-size: 1.8em;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  div {
    margin-top: 9px;
    text-transform: uppercase;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  height: 32px;
  color: ${colours.light};
  margin-right: 20px;
  min-width: 32px;
`;

export const Price = styled.div`
  color: ${colours.primary};
  font-size: 1.8em;
  position: absolute;
  bottom: 20px;
  left: 20px;

  ${Icon} {
    color: ${colours.primary};
    min-width: 32px;
    margin-right: 0;
    height: 26px;
  }
`;

const BuyNow = styled.div`
  color: ${colours.primary};
  background: ${colours.primary}40;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-transform: uppercase;
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 14px 26px 5px;
  cursor: pointer;

  &:hover {
    background: ${colours.primary};
    color: rgb(255 255 255 / 0.90);
  }
`;

const List = styled.ul`
  color: ${colours.darkGrey};
  font-size: 1.2em;
`;



const OnlinePrograms: FC = () => {
  return (
    <PageBodyContainer>
      <Hero image="i5325" small />
      <Overlay>
      </Overlay>

      <Section id="description" lastItem>
        <div className="wrapper">
          <TextOverlay>Online Programs</TextOverlay>
          <PageDescription>
            JF Fitness has designed several pre-recorded programmes which are centred around moving well, building strength and muscle, losing body fat, and performing better.
            <br /><br />
            These programs follow an 8-12 week progressive programme, designed to meet your goals, whilst ensuring fundamental movement patterns are present throughout.
            <br /><br />
            If you are looking for structure, guidance, and a program that will deliver results, then this is the product for you.
          </PageDescription>
          <HashTag>#TagLineExample</HashTag>
        </div>
      </Section>
      
      <ProductsGrid>  
        <Product>
          <Image image={"boxJump"} />
          <Title>Functional Fitness</Title>
          <OverviewSection height={210}>
            <Overview>JF Fitness places functional fitness at the heart of success. This program is designed to improve the way you move, build more strength and improve your energy systems. </Overview>
          </OverviewSection>

          <Requirements height={140}>
            <SubHeading>
              <Icon icon={faCalendarCheck} />
              <div>Requirements</div>
            </SubHeading>
            <Overview>
              <ul>
                <li>Must not be new to exercise</li>
                <li>Have a good understanding of how to perform fundamental movement patterns (Squat, Hip Hinge – e.g. Deadlifts, Pull Ups, Bench Press, Military Press, Plank, etc.)</li>
              </ul>
            </Overview>
          </Requirements>

          <Equipment height={160}>
            <SubHeading>
              <Icon icon={faDumbbell} />
              <div>Equipment</div>
            </SubHeading>
            <List>
              <li>Barbell &amp; Plates</li>
              <li>Kettlebell</li>
              <li>Dumbbells</li>
              <li>Cardio Equipment (Ski Erg, Bike Erg, Assault Bike, Rower, Treadmill, etc.)</li>
            </List>
          </Equipment>

          <Expect height={140}>
            <SubHeading>
              <Icon icon={faHeartbeat} />
              <div>What to Expect</div>
            </SubHeading>
            <Overview>
              <ul>
                <li>4 day training split (Upper, Lower, Full Body, Conditioning session)</li>
                <li>Week by week progress</li>
              </ul>
            </Overview>
          </Expect>

          <Price>
              <Icon icon={faPoundSign} />
              <span>125</span>
          </Price>
          <BuyNow>Buy Now</BuyNow>
        </Product>
        


        <Product>
          <Image image={"holdUpBar"} />
          <Title>Strength</Title>
          <OverviewSection height={210}>
            <Overview>
              Strength training is the key to becoming more robust and is one of the fundamental pillars to all good programs.
              <br /><br />
              The purpose of this program is to create central nervous demand/stress, along with mechanical stress, to increase muscle size/density, bone and joint health, structural integrity, increased metabolism and many more benefits.
              <br /><br />
              If you are looking to push past plateaus, gain serious strength, follow a progressive and structured program, this is the program for you.
            </Overview>
          </OverviewSection>

          <Requirements height={140}>
            <SubHeading>
              <Icon icon={faCalendarCheck} />
              <div>Requirements</div>
            </SubHeading>
            <Overview>
              <ul>
                <li>Must not be new to exercise</li>
                <li>Have a good understanding of how to perform fundamental movement patterns (Squat, Hip Hinge – e.g. Deadlifts, Pull Ups, Bench Press, Military Press, Plank, etc.)</li>
              </ul>  
            </Overview>          
          </Requirements>

          <Equipment height={160}>
            <SubHeading>
              <Icon icon={faDumbbell} />
              <div>Equipment</div>
            </SubHeading>
            {/* <Overview>You will access to at least one of the following, the more the better:</Overview> */}
            <List>
              <li>Barbell &amp; Plates</li>
              <li>Kettlebell</li>
              <li>Dumbbells</li>
              <li>Cardio Equipment (Ski Erg, Bike Erg, Assault Bike, Rower, Treadmill, etc.)</li>
            </List>
          </Equipment>

          <Expect height={140}>
            <SubHeading>
              <Icon icon={faHeartbeat} />
              <div>What to Expect</div>
            </SubHeading>
            <Overview>
              <ul>
                <li>4 day training split (Upper, Lower, Full Body, Conditioning session)</li>
              </ul>
            </Overview>
          </Expect>

          <Price>
            <Icon icon={faPoundSign} />
            <span>299</span>
          </Price>
          <BuyNow>Buy Now</BuyNow>
        </Product>




        <Product>
          <Image image={"pushWeight"} />
          <Title>Fat Loss</Title>
          <OverviewSection height={210}>
            <Overview>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Overview>
          </OverviewSection>
          
          <Requirements height={140}>
            <SubHeading>
              <Icon icon={faCalendarCheck} />
              <div>Requirements</div>
            </SubHeading>
            <Overview>
              <ul>
                <li>Must not be new to exercise</li>
                <li>Have a good understanding of how to perform fundamental movement patterns (Squat, Hip Hinge – e.g. Deadlifts, Pull Ups, Bench Press, Military Press, Plank, etc.)</li>
              </ul>  
            </Overview>
          </Requirements>

          <Equipment height={160}>
            <SubHeading>
              <Icon icon={faDumbbell} />
              <div>Equipment</div>
            </SubHeading>
            {/* <Overview>You will access to at least one of the following, the more the better:</Overview> */}
            <List>
              <li>Barbell &amp; Plates</li>
              <li>Kettlebell</li>
              <li>Dumbbells</li>
              <li>Cardio Equipment (Ski Erg, Bike Erg, Assault Bike, Rower, Treadmill, etc.)</li>
            </List>
          </Equipment>

          <Expect height={140}>
            <SubHeading>
              <Icon icon={faHeartbeat} />
              <div>What to Expect</div>
            </SubHeading>
            <Overview>
              <ul>
                <li>4 day training split (Upper, Lower, Full Body, Conditioning session)</li>
              </ul>
            </Overview>
          </Expect>

          <Price>
            <div>
              <Icon icon={faPoundSign} />
              <span>349</span>
            </div>
            
          </Price>
          <BuyNow>Buy Now</BuyNow>
        </Product>

      </ProductsGrid>
    </PageBodyContainer>
  );
}

export default OnlinePrograms;