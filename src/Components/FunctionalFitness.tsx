import React, { FC } from 'react';
import styled from 'styled-components';
import JumboCard from '../Shared/JumboCard';
import { colours, SectionContainer } from '../Shared/SharedStyles';
import { PageHeading } from './WhyUs';

const Container = styled.div`
  background: rgb(255 255 255 / 0.08);
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  box-sha
`;

const TextContent = styled.div`
  color: ${colours.light};
  font-size: 1.6em;
  font-weight: 100;
`;

const FunctionalFitness: FC = () => {
  return (
    // <Container>
    //   <PageHeading>What is Functional Fitness?</PageHeading>
    //   <TextContent></TextContent>
    // </Container>
    <JumboCard 
      title="What is Functional Fitness?" 
      text="" 
      buttonText="Find out more" 
      link="link" 
      colour="darkGrey" 
      image="i6211" 
    />
  );
}

export default FunctionalFitness;