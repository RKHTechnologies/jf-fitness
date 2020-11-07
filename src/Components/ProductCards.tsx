import React, { FC } from 'react';
import styled from 'styled-components';
// import Card from './Card';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  @media(max-width: 1100px) {
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr;
  }
`;

const ProductCards: FC = () => {
  return (
    <Container>
      {/* <Card image='gym' primary='1-2-1 Online Coaching' url="/onlinecoaching" />
      <Card image='gym' primary='Online Programs' url="/onlineprograms" />
      <Card image='gym' primary='Downloadable e-books' url="/ebooks" />
      <Card image='gym' primary='Services' url="/services" /> */}
    </Container>
  );
}

export default ProductCards;