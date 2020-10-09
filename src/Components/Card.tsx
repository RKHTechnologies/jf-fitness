import React, { FC } from 'react';
import styled from 'styled-components';
import { ImagesDesktop, imageLib } from '../Shared/ImageLib';
import { colours, SharedSettings } from '../Shared/SharedStyles';
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
  min-height: 350px;
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
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #969696;
    opacity: 0.2;
  }

  &:hover {
    transform: scale(1.10);
  }

  @media(max-width: ${SharedSettings.mobile}) {
    min-height: 250px;
  }
`;

const PrimaryText = styled.div`
  font-size: 2vw;
  color: ${colours.light};
  background: ${colours.dark};
  /* padding: 3px 0; */
  padding-top: 8px;
  padding-left: 15px; //margin: auto
  box-sizing: border-box;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  text-align: center;
  /* max-width: 80%; */

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 1.8em;
  }

  @media(max-width: 410px) {
    font-size: 1.4em;
  }
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