import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../Pages/OnlinePrograms';
import { colours } from '../Shared/SharedStyles';
import { MainHeader } from './Contact';

const PageBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  backdrop-filter: blur(12px);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PurchaseContainer = styled.div`
  width: 60%;
  height: calc(100% - 150px);
  background: #121212;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 40px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  position: relative;
`;

const CloseButton = styled.div`
 position: absolute;
  top: 20px;
  right: 22px;
  height: 50px;
  width: 50px;
  background: transparent;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: black;
  }

  &:before, &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 24px;
    height: 40px;
    width: 3px;
    background: #404040;
    transform: rotate(-45deg);
  }

  &:after {
    transform: rotate(45deg);
  }
`;

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: calc(100% - 150px);
  margin-bottom: 50px;
`;

const Column = styled.div`
  width: 45%;
  padding: 0 50px;
  box-sizing: border-box;

  @media(max-width: 1100px) {
    width: 100%;
    padding: 0;
  }
`;

const ItemContainer = styled.div`
  height: 380px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 100%;
  height: 180px;
  background: #353535;
  margin-top: 20px;
  border-radius: 7px;
  position: relative;
`;

const MasterCard = styled.div`
  width: 100px;
  height: 40px;
  position: absolute;
  bottom: 20px;
  right: -10px;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgb(255 0 0 / 0.7);
  }

  &:after {
    background: rgb(255 165 0 / 0.7);
    right: 32px;
  }
`;

const HeaderText = styled.div`
  width: 100%;
  color: rgb(255 255 255 / 0.7);
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-indent: 2px;
  margin-top: 14px;
  margin-bottom: 8px;
  font-size: 1.2em;
`;

const ButtonsContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  position: absolute;
`;

interface IFormItemProps {
  half?: boolean;
}

const FormItem = styled.input`
  width:${(p: IFormItemProps) => p.half ? "48%" : "100%"};
  height: 40px;
  background: #1F1F1F;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  border: 0;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 0 20px;
  font-size: 1.2em;
  font-weight: 400;
  padding-top: 6px;
`;

interface IProps { 
  open?: boolean;
}

const PurchaseOverlay: FC<IProps> = ({ open }: IProps) => {
  return (
    <PageBackground>
      <PurchaseContainer>
        <MainHeader>Order Summary</MainHeader>
        <CloseButton />

        <FormContainer>
          <Column>
            <ItemContainer>
              <HeaderText>Your Details</HeaderText>
              <FormItem placeholder="First Name" name="firstname" half />
              <FormItem placeholder="Last Name" name="lastname" half />
              <FormItem placeholder="Email" name="email" />
              <HeaderText>Billing Information</HeaderText>
              <FormItem placeholder="Address Line 1" name="address1" />
              <FormItem placeholder="Address Line 2" name="address2" />
              <FormItem placeholder="Postcode" name="postcode" />
            </ItemContainer>
            <Card>
              <MasterCard />
            </Card>
          </Column>
          <Column>
            test
          </Column>
        </FormContainer>

        <ButtonsContainer>
          <Button wide>Checkout</Button>
        </ButtonsContainer>
      </PurchaseContainer>
    </PageBackground>
  );
}

export default PurchaseOverlay;