import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../Pages/OnlinePrograms';
import { colours } from '../Shared/SharedStyles';


const PageBlur = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  backdrop-filter: blur(12px);
  /* z-index: 5; */
`;

const Card = styled.div`
  position: fixed;
  width: 800px;
  height: 120px;
  margin: auto;
  top: calc(50% - 50px);
  left: calc(50% - 400px);
  background: #2F2F2F;
  color: ${colours.light};
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.4em;
  font-weight: 100;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  border-radius: 10px;
`;

const OK = styled(Button)`
  padding: 8px 16px 2px;
  font-size: 0.9em;
  margin-top: 16px;
`;

interface IProps {
  open?: boolean;
  close: () => void;
  text: string;
}


const InfoOverlay: FC<IProps> = ({ open, close, text }: IProps) => {
  return (
    <>
      {open && (
        <>
          <PageBlur />
          <Card >
            {text}
            <OK onClick={close}>OK</OK>
          </Card>   
        </>
      )}   
    </>
  );
}

export default InfoOverlay;