import React, { FC } from 'react';
import { PageBodyContainer } from '../Shared/SharedStyles';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { Overlay, ProductsGrid, TextOverlay } from './OnlinePrograms';

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const EBooks: FC = () => {
  return (
    <PageBodyContainer>
      <Hero image="barResting" small />
      <Overlay>
        <TextOverlay>E-BOOKS</TextOverlay>
      </Overlay>
      <ProductsGrid>
        test
      </ProductsGrid>
    </PageBodyContainer>
  );
}

export default EBooks;