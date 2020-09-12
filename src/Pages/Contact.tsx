import React, { FC } from 'react';
import { PageBodyContainer } from '../Shared/SharedStyles';
import styled from 'styled-components';

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Contact: FC = () => {
  return (
    <PageBodyContainer>
      <Centered>
        Contact page placeholder
      </Centered>
    </PageBodyContainer>
  );
}

export default Contact;