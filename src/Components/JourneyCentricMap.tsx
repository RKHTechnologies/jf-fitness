import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';

const Container = styled.div`
  width: 800px;
  color: white;
  display: flex;
  justify-content: space-between;
  margin: auto;

  @media(max-width: 850px) {
    width: 100%;
    flex-direction: column;
  }
`;

const MapItem = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 140px;

  @media(max-width: 850px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const ItemCount = styled.div`
  width: 50px;
  height: 50px;
  color: ${colours.primary};
  border: 2px solid ${colours.primary};
  border-radius: 50%;
  font-size: 1.8em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 8px;

  @media(max-width: 850px) {
    margin: 10px 20px;
  }
`;

const ItemTitle = styled.div`
  margin-top: 10px;
  font-size: 1.2em;
  color: rgb(255 255 255 / 0.7);

  @media(max-width: 850px) {
   
  }
`;

const JourneyCentricMap: FC = () => {
  return (
    <Container>
      <MapItem>
        <ItemCount>1</ItemCount>
        <ItemTitle>Consultation Call</ItemTitle>
      </MapItem>
      <MapItem>
        <ItemCount>2</ItemCount>
        <ItemTitle>Onboarding</ItemTitle>
      </MapItem>
      <MapItem>
        <ItemCount>3</ItemCount>
        <ItemTitle>Goal Setting</ItemTitle>
      </MapItem>
      <MapItem>
        <ItemCount>4</ItemCount>
        <ItemTitle>Assessnents</ItemTitle>
      </MapItem>
      <MapItem>
        <ItemCount>5</ItemCount>
        <ItemTitle>Weekly Checkins</ItemTitle>
      </MapItem>
    </Container>
  );
};

export default JourneyCentricMap;