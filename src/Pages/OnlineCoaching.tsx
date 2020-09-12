import React, { FC } from 'react';
import { PageBodyContainer } from '../Shared/SharedStyles';
import styled from 'styled-components';

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
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