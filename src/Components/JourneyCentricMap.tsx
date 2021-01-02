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

const ItemCount = styled.div`
  
`;

const ItemTitle = styled.div`
  
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