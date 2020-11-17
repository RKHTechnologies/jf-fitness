import React, { FC } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { imageLib, ImagesDesktop } from '../../Shared/ImageLib';
import { colours } from '../../Shared/SharedStyles';

const Container = styled.div`
  color: ${colours.light};
  width: 100vw;
  height: calc(100vh - 82px);
  margin-top: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  display: grid;
  width: 80%;
  height: 500px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px 1fr 50px;
  grid-template-areas: 
    'ebookimage title'
    'ebookimage description'
    'ebookimage button';
  grid-gap: 40px;

  @media(max-width: 1250px) {
    width: 90%;
  }
`;

interface ImageProps {
  image: imageLib;
}

const Image = styled.div`
  grid-area: ebookimage;
  background: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

const Title = styled.h1`
  grid-area: title;
  font-size: 3.5em;
  margin: 0;
  font-weight: 400;
  height: 50px;
`;

const Description = styled.div`
  grid-area: description;
  color: #818999;
`;

const Button = styled.div`
  grid-area: button;
`;

interface IParams {
  ebook: string;
}

const EBook: FC = () => {
  let { ebook }: IParams = useParams();
  let title: string = "";
  let image: imageLib = "boxJump";

  switch(ebook) {
    case "1": 
      title = "Bodyweight Finishers";
      image = "i6969";
      break;
    
    case "2":
      title = "AMRAP's & EMOM's";
      break;

    case "3":
      title = "DB Only Workouts";
      break;
  }

  return (
    <Container>
      <Card>
        <Image image={image} />
        <Title>{title}</Title>
        <Description>
          { ebook === "1" && (
            <div>Train the JF Fitness way, learn to use Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          )}

          { ebook === "2" && (
            <div>When it comes to building core strength, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          )}

          { ebook === "3" && (
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
          )}
        </Description>
        <Button></Button>
      </Card>
    </Container>
  );  
}

export default EBook;