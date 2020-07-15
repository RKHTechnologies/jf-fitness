import React from 'react';
import HeaderBar from './HeaderBar';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';
import GlobalStyle from '../Shared/GlobalStyle';
import MetricTest from "./MetricTest";

const ContentContainer = styled.div`
  position: absolute;
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  border-top: 1px solid ${colours.lightGrey};
`;

const Home: React.FC = () => {
  
  return (
    <>
      <GlobalStyle />
      <HeaderBar stickyHeader />
      <ContentContainer>
        <MetricTest />
      </ContentContainer>
    </>
  );
}

export default Home;