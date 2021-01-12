import React, { FC } from 'react';
import { colours, PageBodyContainer, SharedSettings } from '../Shared/SharedStyles';
import styled from 'styled-components';
import { Button, Detail, HashTagMini, Icon, Overlay, Price, TextOverlay } from './OnlinePrograms';
import Hero from '../Shared/Hero';
import { Section } from './Home';
import { PageDescription } from './E-Books/EBooks';
import Testimonials from '../Components/Testimonials';
import Contact from '../Components/Contact';
import JourneyCentricMap from '../Components/JourneyCentricMap';
import { imageLib, ImagesDesktop } from '../Shared/ImageLib';
import checkIcon from '../img/Check_Icon.svg';
import { faPoundSign } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Shared/Footer';
import { StripeBuyNow } from '../Shared/Products';

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
  
  text-align: justify;
  font-size: 1.6em;
  font-weight: 100;
  color: rgb(255 255 255 / 0.7);
  margin-top: 20px;
`;

const Card = styled.div`
  width: 100%;
  background: rgba(255,255,255,0.12);
  color: rgb(255 255 255 / 0.7);
  font-weight: 100;
  font-size: 1.2em;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Left = styled.div`
  width: 50%;
  padding: 25px;
  box-sizing: border-box;
  
  @media(max-width: 900px) {
    width: 100%;
    padding: 0;
  } 
`;

const Right = styled.div`
  width: 50%;

  @media(max-width: 900px) {
    width: 100%;
  }
`;


interface ImageProps {
  image: imageLib;
}

const Image = styled.div`
  grid-area: image;
  width: 100%;
  background: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 10px;
  border-radius: 5px;
  min-height: 600px;

  @media(max-width: 1170px) {
    min-height: 450px;
  }

  @media(max-width: 700px) {
    min-height: 300px;
  }
`;

const ItemTitle = styled.h1`
  color: ${colours.primary};
  text-transform: uppercase;
  text-align: left;
  font-weight: 400;
  font-size: 1.8em;
  margin-bottom: 0;

  &:not(:first-child) {
    margin-top: 30px;
  }

  @media(max-width: 450px) {
    font-size: 1.4em;
  }
`;

const HowItWorks = styled.div`
  margin-top: 0;
`;

const CheckList = styled.div`
  li {
    list-style: none;
    margin: 5px 36px 0;

    &:before {
      content: '';
      width: 20px;
      height: 20px;
      background-image: url(${checkIcon});
      background-size: contain;
      position: absolute;
      margin-top: -2px;
      margin-left: -34px;
    }
  }

  @media(max-width: ${SharedSettings.mobile}) {
    margin-left: 15px;
    text-align: left;
  }
`;


const PriceContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: -8px;

  @media(max-width: 450px) {
    flex-wrap: wrap;
    height: 90px;
    margin-bottom: 20px;
  }
  
  p {
    color: rgb(255 255 255 / 0.7);
    font-size: 1.2em;
    width: calc(100% - 168px);
    margin: 12px auto 6px 6px;

    @media(max-width: 1280px) {
      height: 80px;
      margin-top: 50px;
      font-size: 1em;
    }

    @media(max-width: 450px) {
      width: 100%;
      height: auto;
      margin-top: 20px;
    }

    span {
      color: ${colours.primary};
    }
  }
`;

const OverallPrice = styled.span`
  font-weight: 400;
  font-size: 0.8em;
`;

const CoachingDetail = styled(Detail)`
  font-size: 1em;

  @media(max-width: 450px) {
    width: calc(100% - 90px);
    text-align: left;
    margin: 0;
    margin-bottom: -15px;
  }
`;

const CoachingButton = styled(Button)`
  font-size: 0.8em;
  font-weight: 400;
  margin-right: -8px;

  @media(max-width: 450px) { 
    margin-top: 15px;
  }
`;


const OnlineCoaching: FC = () => {
  
  const handleClick = () => {
    StripeBuyNow('Online121');
  }

  return (
    <PageBodyContainer>
      <Hero image="i6808" />
      <Overlay />

      <Section id="description" lastItem>
        <div className="wrapper">
          <TextOverlay>1-2-1 Online Coaching</TextOverlay>
          <CoachingDescription>
            The 1-2-1 online coaching service is our top tiered service. It is completely client centric and tailored to you and your individual goals, whilst adhering to our principal view that functional fitness is at the heart of what we do. 
            <br /><br />
            No goal is too big or small and with the necessary strategies and systems in place JF Fitness has the tools to bring success to your fitness journey.
            <br /><br />
            Take the necessary action today and become your own athlete. 
            <HashTagMini>#BeYourOwnAthlete</HashTagMini>
          </CoachingDescription>
        </div>
      </Section>  

      <Section id="journeyCentricMap">
        <div className="wrapper">
          <JourneyCentricMap />
        </div>
      </Section>

      <Section id="whatServiceOffers" fullwidth>
          <Card>
            <Left>
              <Image image={"i6585"} />
            </Left>
            <Right>
              <ItemTitle>What to Expect</ItemTitle>
              <CheckList>
                <li>Consultation call</li>
                <li>Onboarding/Assessments</li>
                <li>Bespoke exercise program </li>
                <li>Weekly workouts direct to your phone</li>
                <li>Access to the Truecoach app</li>
                <li>Video demonstrations</li>
                <li>Trackable progress</li>
                <li>Weekly check-ins</li>
                <li>Monthly support calls</li>
              </CheckList>

              <ItemTitle>What Next...</ItemTitle>
              <HowItWorks>
                Once purchased a member of the team will be in touch to arrange your initial consultation call.
              </HowItWorks>

              <PriceContainer>
                <Price>
                    <Icon icon={faPoundSign} />
                    <OverallPrice>250</OverallPrice>
                </Price>
                <CoachingDetail>per month (minimum commitment - 3 months)</CoachingDetail>
                {/* <Button onClick={() => OpenOverlay("boxJump", "Functional Fitness -   12 Week plan", 150)}>Buy Now</Button> */}
                <CoachingButton onClick={handleClick}>Buy Now</CoachingButton>      
              </PriceContainer>
            </Right>
          </Card>
      </Section>

      <Section id="testimonials">
        <div className="wrapper">
          <Testimonials />
        </div>
      </Section>

      <Section id="ContactUs" fullwidth lastItem>
        <Contact />
      </Section>

      <Footer />
    </PageBodyContainer>
  );
}

export default OnlineCoaching;