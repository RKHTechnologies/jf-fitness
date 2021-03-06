import React, { FC } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { imageLib, ImagesDesktop } from '../Shared/ImageLib';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import checkIcon from '../img/Check_Icon.svg';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface ServiceProps {
  alt?: boolean;
}

export const Strip = styled.div`
  width: 100%;
  background:  ${(p: ServiceProps) => p.alt ? "transparent" : "#252525"};
`;

export const Service = styled.div`
  width: 100%;
  max-width: 1800px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: ${(p: ServiceProps) => p.alt ? "'text image'" : "'image text'"};
  margin: 50px 0 100px;

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'text'
      'image';
  }
`;

interface ImageProps {
  image: imageLib;
  alt?: boolean;
  short?: boolean;
  right?: boolean;
  contain?: boolean;
}

export const Image = styled.div`
  grid-area: image;
  width: 80%;
  height: ${(p: ImageProps) => p.short ? "400px" : "500px"};
  background-color: transparent;
  background-image: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  background-size: ${(p: ImageProps) => p.contain ? "contain" : "cover"};
  background-repeat: no-repeat;
  background-position: center;
  background-position-x: ${(p: ImageProps) => p.right ? "right" : null};
  text-align: right;
  margin:  ${(p: ImageProps) => p.alt ? "auto auto auto 0" : "auto 0 auto auto"};

  @media(max-width: ${SharedSettings.mobile}) {
    margin: auto;
    margin-top: 10px;
    width: 100%;
    height: 250px;
  }
`;

export const Text = styled.div`
  grid-area: text;
  padding: 50px 100px;
  text-align: ${(p: ServiceProps) => p.alt ? "right" : null};
  color: rgb(255 255 255 /0.88);

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 0 10px;
    text-align: center;
  }
`;


export const Title = styled.h1`
  font-weight: 300;
  margin-top: 0;
  font-size: 2.5em;
  color: ${colours.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: ${(p: ServiceProps) => p.alt ? "left" : null};
  text-transform: uppercase;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 2em;
  }
`;

export const Description = styled.div`
  text-align: justify;
  font-size: 1.2em;
  color: rgb(255 255 255 / 0.7);
  font-weight: 100;
`;

const CheckList = styled.div`
  margin-top: 20px;
  color: #818999;
  font-size: 1.2em;

  li {
    list-style: none;
    margin: 25px 34px 0;

    &:before {
      content: '';
      width: 24px;
      height: 24px;
      background-image: url(${checkIcon});
      background-size: contain;
      position: absolute;
      margin-top: -3px;
      margin-left: -34px;
    }
  }

  @media(max-width: ${SharedSettings.mobile}) {
    margin-left: 15px;
    text-align: left;
  }
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
  margin-top: 40px;

  &:hover {
    background: ${colours.primary};
    color: rgb(255 255 255 / 0.90);
  }
`;

const Highlight = styled.span`
  color: ${colours.primary};
  font-weight: 500;
  font-style: italic;
`;

const Services: FC = ()  => {

  const history = useHistory();

  const handleNav = (link: string): void => {
      history.push(`${process.env.PUBLIC_URL}${link}`);
  }

  return (
    <Container>

      <Strip id="onlineCoaching">
        <Service>
          <Image image="i5024" />
          <Text>
            <Title>1-2-1 Online Coaching</Title>
            <Description>
              The 1-2-1 online coaching service is our top tiered product and is designed to suit your individual goals, needs and wants. 
              <br /><br />
              This has <Highlight>YOU</Highlight> at the forefront, whether its your current training abilities, personal lifestyle, equipment access, daily routine, previous injuries, etc. we deliver a completely bespoke and tailored service that is journey centric and has a proven track record of getting you to where you want to be. 
              <br /><br />
              This service has it all, including an initial onboarding call, mobility assessments, goal setting, bespoke training plans, weekly check-ins, 1-2-1 online support, nutritional advice and more. So, if this sounds like the plan for you, click below to find out more. 
            </Description>
            <Button onClick={() => handleNav("/onlinecoaching")} >Find out More</Button>
          </Text>
        </Service>
      </Strip>

      <Strip alt id="onlinePrograms">
        <Service alt>
          <Image image="i5092" alt />
          <Text alt>
            <Title alt>Online Programs</Title>
            <Description>
              The online programs are a series of downloadable 12-week functional fitness plans, which are progressive and carefully structured.
              <br /><br />
              They are designed for those who are looking for exercise guidance and inspiration, whilst maintaining some aspects of control and accountability. 
              <br /><br />
              Whether you are looking to build strength and muscle, lose body fat, or improve overall performance, our programs will have you covered and steer you in the right direction to fitness success. 
            </Description>
            <Button onClick={() => handleNav("/onlineprograms")}>View our different programs</Button>
          </Text>
        </Service>
      </Strip>

      <Strip id="ebooks">
        <Service>
          <Image image="i5509" />
          <Text>
            <Title>E-Books</Title>
            <Description>
              The JF Fitness downloadable E-Books can be a great addition to your workouts or be used as stand-alone sessions. 
              <br /><br />
              These are efficient, but effective workouts which are designed to inspire, challenge and push you to your limits.
              <br /><br />
              These are easily digestible workout plans at your fingertips, so click below to find out more.
            </Description>
            <Button onClick={() => handleNav("/ebooks")}>See our range of ebooks</Button>
          </Text>
        </Service>
      </Strip>
    </Container>
  );
}

export default Services;