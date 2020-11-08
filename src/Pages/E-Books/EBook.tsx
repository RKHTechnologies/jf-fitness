import React, { FC } from 'react';
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
`;

const Button = styled.div`
  grid-area: button;
`;


interface IProps {
  title: string;
  description: string;
}

const EBook: FC<IProps> = ({ title, description }: IProps) => {
  return (
    <Container>
      <Card>
        <Image image={"boxJump"} />
        <Title>{title}</Title>
        <Description>{ description }</Description>
        <Button></Button>
      </Card>
    </Container>
  );  
}

export default EBook;