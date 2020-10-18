import React, { FC } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { imageLib, ImagesDesktop } from '../Shared/ImageLib';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import checkIcon from '../img/Check_Icon.svg';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Strip = styled.div`
  width: 100%;
  background:  ${(p: ServiceProps) => p.alt ? "transparent" : "#252525"};
`;

interface ServiceProps {
  alt?: boolean;
}

const Service = styled.div`
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
}

const Image = styled.div`
  grid-area: image;
  width: 80%;
  height: ${(p: ImageProps) => p.short ? "400px" : "500px"};
  background: lightgrey;
  background-image: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
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



const Text = styled.div`
  grid-area: text;
  padding: 50px 100px;
  text-align: ${(p: ServiceProps) => p.alt ? "right" : null};
  /* padding-left: ${(p: ServiceProps) => p.alt ? "50px" : null}; */
  color: rgb(255 255 255 /0.88);

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 0 10px;
    text-align: center;
  }
`;



const Title = styled.h1`
  font-weight: 300;
  margin-top: 0;
  font-size: 2.5em;
  color: ${colours.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  /* padding-left: ${(p: ServiceProps) => p.alt ? "50px" : null}; */
  text-align: ${(p: ServiceProps) => p.alt ? "left" : null};
  text-transform: uppercase;

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 2em;
    /* padding-left: 0; */
  }
`;

const Description = styled.div`
  text-align: justify;
  font-size: 1.2em;
  color: #818999;
  /* padding-left: ${(p: ServiceProps) => p.alt ? "50px" :  null}; */

  @media(max-width: ${SharedSettings.mobile}) {
    text-align: justify;
    /* padding-left: 0; */
  }
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

interface ButtonProps {
  primary?: boolean;
}

const Button = styled.div`
  color: ${colours.primary};
  background: ${colours.primary}40;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-transform: uppercase;
  /* position: absolute;
  bottom: 20px;
  right: 20px; */
  padding: 14px 26px 5px;
  cursor: pointer;
  margin-top: 20px;

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
          <Image image="holdUpBar2" right />
          <Text>
            <Title>1-2-1 Online Coaching</Title>
            <Description>
              Our bespoke 1-2-1 coaching program allows you Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Description>
            <CheckList>
              <li>Duis aute irure dolor in reprehenderit</li>
              <li>In voluptate velit esse cillum dolore eu fugiat nulla pariatur</li>
              <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip</li>
              <li>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
              <li>Adipiscing et dolore magna aliqua</li>
            </CheckList>
            <Button onClick={() => handleNav("/onlinecoaching")} >Find out More</Button>
          </Text>
        </Service>
      </Strip>

      <Strip alt id="onlinePrograms">
        <Service alt>
          <Image image="stretching" alt short />
          <Text alt>
            <Title alt>Online Programs</Title>
            <Description alt>
              There are many different programs to <Highlight>fit your needs</Highlight>, quis nostrud exercitation ullamco commodo <Highlight>we understand</Highlight> ullamco laboris nisi ut aliquip.
              <br /><br />
              JF FITNESS can help you to <Highlight>progress</Highlight> In voluptate velit esse cillum dolore eu fugiat nulla pariatur dipiscing et dolore magna aliqua.
              We will be able to <Highlight>advise</Highlight> and personally recommend a <Highlight>great program</Highlight> fugiat nulla pariatur.
              <br /><br />
              Quis nostrud exercitation ullamco laboris nisi ut a <Highlight>fitness regime</Highlight> will guide you through the next steps, <Highlight>removing all hassle</Highlight> and stress!
            </Description>
            <Button onClick={() => handleNav("/onlineprograms")}>View our different programs</Button>
          </Text>
        </Service>
      </Strip>

      <Strip id="ebooks">
        <Service>
          <Image image="rowing" />
          <Text>
            <Title>Ebooks</Title>
            <Description>
              We also have available a number of e-books to aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
            </Description>
            <CheckList>
              <li>Duis aute irure dolor in reprehenderit</li>
              <li>In voluptate velit esse cillum dolore eu fugiat nulla pariatur</li>
              <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip</li>
              <li>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</li>
              <li>Adipiscing et dolore magna aliqua</li>
            </CheckList>
            <Button onClick={() => handleNav("/ebooks")}>See our range of ebooks</Button>
          </Text>
        </Service>
      </Strip>
    </Container>
  );
}

export default Services;