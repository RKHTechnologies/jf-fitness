import React, { FC } from 'react';
import { colours, PageBodyContainer } from '../Shared/SharedStyles';
import styled from 'styled-components';

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
      <Centered>
        1-2-1 Online coaching page placeholder
      </Centered>
    </PageBodyContainer>
  );
}

export default OnlineCoaching;