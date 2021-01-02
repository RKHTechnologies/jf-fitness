import React, { FC } from 'react';
import styled from 'styled-components';
import { colours } from '../Shared/SharedStyles';

const Container = styled.div`
  width: 80%;
  color: white;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const MapItem = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

const ItemCount = styled.div`
  width: 100px;
  height: 100px;
  color: ${colours.primary};
  border: 2px solid ${colours.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemTitle = styled.div`
  margin-top: 10px;
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