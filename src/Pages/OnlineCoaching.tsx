import React, { FC } from 'react';
import { colours, PageBodyContainer } from '../Shared/SharedStyles';
import styled from 'styled-components';
import { Overlay, ProductsGrid, TextOverlay } from './OnlinePrograms';
import Hero from '../Shared/Hero';

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${colours.light};
`;

const OnlineCoaching: FC = () => {
  return (
    <PageBodyContainer>
      <Hero image="barResting" small />
      <Overlay>
        <TextOverlay>1-2-1 Online Coaching</TextOverlay>
      </Overlay>
      <ProductsGrid>
        test
      </ProductsGrid>
    </PageBodyContainer>
  );
}

export default OnlineCoaching;