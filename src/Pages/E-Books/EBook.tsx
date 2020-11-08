import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../../Shared/SharedStyles';

interface IProps {
  title: string;
}

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
  grid-template-areas: 
    'ebookimage title'
    'ebookimage description'
    'ebookimage description'
    'ebookimage button';
  grid-gap: 40px;
`;

const Image = styled.div`
  grid-area: ebookimage;
  background: red;
`;

const Title = styled.div`
  grid-area: title;
`;

const Description = styled.div`
  grid-area: description;
`;

const Button = styled.div`
  grid-area: button;
`;




const EBook: FC<IProps> = ({ title }: IProps) => {
  return (
    <Container>
      <Card>
        <Image />
        <Title>{title}</Title>
        <Description></Description>
        <Button></Button>
      </Card>
    </Container>
  );  
}

export default EBook;