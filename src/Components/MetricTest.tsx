import React from 'react';
import styled from "styled-components";
import { ReactComponent as Logo } from '../img/logo.svg';

interface ContainerProps {
  black?: boolean;
}

const JFLogo = styled(Logo)`
  position: absolute;
  top: 40px;
  left: calc(50% - 160px);
  width: 300px;
  height: 180px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  font-size: 72px;
  padding: 40px;
  background: ${(p: ContainerProps): string => p.black ? "#000" : "#fff"};
  color: ${(p: ContainerProps): string => p.black ? "#fff" : "#000"};
  position: relative;
  padding-top: 200px;

  div:nth-child(2) { font-weight: 100; }
  div:nth-child(3) { font-weight: 300; }
  div:nth-child(4) { font-weight: 300; font-style: italic; }
  div:nth-child(5) { font-weight: 400; }
  div:nth-child(6) { font-weight: 500; }
  div:nth-child(7) { font-weight: 600; }
  div:nth-child(8) { font-weight: 800; }

  ${JFLogo} {
    right: ${(p: ContainerProps): string => p.black ? "40px" : "unset"};
    right: ${(p: ContainerProps): string => p.black ? "unset" : "40px"};
    fill: ${(p: ContainerProps): string => p.black ? "#fff" : "#000"};
  }
`;


const MetricTest: React.FC = () => {
  return (
  <>
    <PageContainer>
      <JFLogo />
      <div>JF Fitness</div>
      <div>JF Fitness</div>
      <div>JF Fitness</div>
      <div>JF Fitness</div>
      <div>JF Fitness</div>
      <div>JF Fitness</div>
      <div>JF Fitness</div>
    </PageContainer>
    <PageContainer black>
      <JFLogo />
      <div>JF Fitness</div>
      <div>JF Fitness</div>
      <div>JF Fitness</div>
      <div>JF Fitness</div>
      <div>JF Fitness</div>
      <div>JF Fitness</div>
      <div>JF Fitness</div>
    </PageContainer>
  </>);
}

export default MetricTest;