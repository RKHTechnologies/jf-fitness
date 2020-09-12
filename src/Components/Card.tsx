import React, { FC } from 'react';
import styled from 'styled-components';
import { ImagesDesktop, imageLib } from '../Shared/ImageLib';
import { colours } from '../Shared/SharedStyles';
import { useHistory } from 'react-router-dom';

interface IProps {
  image: imageLib;
  primary: string;
  url: string
}

interface IContainerProps {
  image: imageLib;
}

const CardContainer = styled.div`
  width: 100%;
  min-height: 400px;
  position: relative;
  background: url(${(p: IContainerProps) => ImagesDesktop[p.image]});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${colours.dark};
    opacity: 0.3;
  }

  &:hover {
    transform: scale(1.10);
  }
`;

const PrimaryText = styled.div`
  font-size: 2em;
  color: ${colours.light};
  border-top: 2px solid ${colours.light};
  border-bottom: 2px solid ${colours.light};
  padding: 3px 0;
  z-index: 1;
  text-align: center;
  max-width: 80%;
`;

const Card: FC<IProps> = ({image, primary, url}: IProps) => {
  const history = useHistory();
  
  return (
    <>
      <CardContainer image={image} onClick={() => history.push(`${process.env.PUBLIC_URL}${url}`)}>
        <PrimaryText>{primary}</PrimaryText>
      </CardContainer>
    </>
  );
}

export default Card;