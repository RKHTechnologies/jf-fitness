import React, { FC } from 'react';
import styled from 'styled-components';
import { colours, SharedSettings, Colour } from '../Shared/SharedStyles';
import { useHistory } from 'react-router-dom';
import {ImagesDesktop, imageLib} from '../Shared/ImageLib';

const JumboCardContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 3fr 2fr 2fr;
  /* grid-template-areas:
    'side image image'
    'side image image'
    'side image image'; */
  grid-template-columns: 2fr 2fr 3fr;
  grid-template-areas:
    'image image side'
    'image image side'
    'image image side';

  h3 {
      grid-area: title;
      font-size: 2.8em;
      margin: 5px 0;
      font-weight: 400;
      /* max-width: 256px; */
  }
  p {
    grid-area: text;
    font-weight: 100;
    color: ${colours.light};
    width: 100%;
    font-size: 1.4em;
  }

  @media(max-width: 1380px) {
    h3 { font-size: 2.6em; }
  }

  @media(max-width: 1260px) {
    width: 90%;
  }

  @media(max-width: 1180px) {
    width: 95%;
  }


  @media(max-width: ${SharedSettings.mobile}) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-template-areas: 
      'side'
      'image';

    h3 {
      font-size: 2em;
      max-width: none;
      margin: 10px auto 0;
    }

    p {
      text-align: center;
    }
  }
`;

const SideContainer = styled.div`
  grid-area: side;
  background: ${colours.primary};
  color: ${colours.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
  padding: 25px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    border-top: 22px solid transparent;
    border-bottom: 22px solid transparent;
    border-left: 22px solid ${colours.primary};
    left: -22px;
    top: calc(50% - 22px);
    transform: rotate(180deg);
  }

  @media(max-width: ${SharedSettings.mobile}) {
    padding: 10px;
    text-align: center;
    padding-bottom: 40px;
    
    &:after {
      border-top: 22px solid ${colours.primary};
      border-bottom: none;
      border-left: 22px solid transparent;
      border-right: 22px solid transparent;
      left: calc(50% - 22px);
      bottom: -22px;
      top: auto;
      transform: rotate(0deg);
    }
  }
`;

const Button = styled.div`
  grid-area: joinUs;
  color: ${colours.light};
  border: 0;
  background: rgb(255 255 255 / 0.28);
  padding: 14px 26px 5px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 300;
  width: calc(100% - 105px);
  text-align: center;
  position: absolute;
  bottom: 26px;  
  left: 26px;
  cursor: pointer;

  &:hover {
    background: rgb(255 255 255 / 0.68);
    color: ${colours.primary};
    font-weight: 400;
  }

  @media(max-width: ${SharedSettings.mobile}) {
    margin: 4px auto 6px;
    bottom: 10px;
  }
`;

interface ImageProps {
  image: imageLib;
}

const MainImage = styled.div`
  grid-area: image;
  background: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
  height: 500px;
  background-position: center;
  
  @media(max-width: ${SharedSettings.mobile}) {
    height: 300px;
  }  
`;

interface IProps {
  title: string,
  text: string
  buttonText: string,
  link: string,
  colour: Colour,
  image: imageLib,
}

const JumboCard: FC<IProps> = ({ title, text, buttonText, link, colour, image }: IProps) => {

  const history = useHistory();

  const handleClick = () => {
    // window.scrollTo({
    //   left: 0,
    //   top: document.getElementById('ContactUs')?.offsetTop ?? 0,
    //   behavior: 'smooth'
    // });

    history.push(`${process.env.PUBLIC_URL}/onlineprograms`);
  };
  
  return (
    <>
      <JumboCardContainer>
        <SideContainer>
          <h3>{title}</h3>
          <p>
            Functional Fitness is a classification of exercise, which involves training the body for the activities performed in daily life. 
            <br /><br />
            It is a purposeful and individual approach to continued development across areas such as movement, strength and capacity. Each endeavour should transcend into daily life and contribute to a long-term, sustainable and healthy lifestyle. 
          </p>
          <Button onClick={handleClick}>{buttonText}</Button>
        </SideContainer>
        <MainImage image={image}/>
      </JumboCardContainer>
    </>
  );
}

export default JumboCard;