import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  color: white;
  display: flex;
  justify-content: space-between;
  margin: auto;
`;

const MapItem = styled.div`
  width: 200px;
  height: 200px;
  background: red;
  border-radius: 50%;
`;

const ItemTitle = styled.div`

`;

const ItemCount = styled.div`
  
`;





const JourneyCentricMap: FC = () => {
  return (
    <Container>
      <MapItem>
        <ItemCount>1</ItemCount>
        <ItemTitle>Consultation Call</ItemTitle>
      </MapItem>
      <MapItem>
        <ItemTitle>Consultation Call</ItemTitle>
      </MapItem>
      <MapItem>
        <ItemTitle>Consultation Call</ItemTitle>
      </MapItem>
      <MapItem>
        <ItemTitle>Consultation Call</ItemTitle>
      </MapItem>
      <MapItem>
        <ItemTitle>Consultation Call</ItemTitle>
      </MapItem>
    </Container>
  );
};

export default JourneyCentricMap;

{/* Consultation Call
      -
      Onboarding
      -
      Goal Setting
      -
      Assessnents
      -
      Weekly checkins */}