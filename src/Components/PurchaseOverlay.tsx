import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from '../Pages/OnlinePrograms';
import { imageLib, ImagesDesktop } from '../Shared/ImageLib';
import { MainHeader } from './Contact';

interface IPageBackgroundProps {
  open?: boolean;
} 

const PageBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: ${(p: IPageBackgroundProps) => p.open ? "0" : "null"};
  right: 0;
  left: 0;
  backdrop-filter: blur(12px);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IPurchaseProps {
  open?: boolean;
}

const PurchaseContainer = styled.div`
  width: 1200px;
  height: ${(p: IPurchaseProps) => p.open ? "calc(100% - 150px)" : "0"};
  background: #121212;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: ${(p: IPurchaseProps) => p.open ? "40px" : "0"};
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
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
  height: 210px;
  background: #353535;
  margin-top: 20px;
  border-radius: 7px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
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

const LongNumber = styled.input`
  width: 80%;
  height: 40px;
  background: transparent;
  border: 0;
  font-size: 2em;
  margin-top: 50px;
  color: #757575;
  height: 18px;
  padding-top: 10px;
  border-bottom: 2px solid;
  margin-left: 20px;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:before {
    content: 'Card Number';
    position: absolute;
    color: white;
  }
`;

const Date = styled(LongNumber)`
  width: 62px;
  margin-top: -16px;
  font-size: 1.8em;
`;

const CVV = styled(Date)`
  width: 50px;
`;

interface ImageProps {
  image: imageLib;
}

const Image = styled.div`
  width: 100%;
  height: 220px;
  background: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  border-radius: 6px;
  margin-top: 16px;
  background-size: cover;
  background-position: center;
`;

interface IHeaderTextProps {
  right?: boolean;
}

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
  text-align: ${(p: IHeaderTextProps) => p.right ? "right" : "left"};
`;

const H1Text = styled(HeaderText)`
  font-size: 2em;
  color: rgb(255 255 255 / 0.88);
`;

const SubtotalRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
`;

const TotalRow = styled(SubtotalRow)`
  margin-top: 40px;
  padding-top: 10px;
  border-top: 2px solid #353535;


  & > div {
    font-size: 1.4em;
    color: rgb(255 255 255 / 0.88);
  }
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
  color: #707070;
`;

interface IProps { 
  open?: boolean;
  CloseOverlay: () => void;
}

const PurchaseOverlay: FC<IProps> = ({ open, CloseOverlay }: IProps) => {
  return (
    <PageBackground open={open}>
      <PurchaseContainer open={open}>
        <MainHeader>Order Summary</MainHeader>
        <CloseButton onClick={CloseOverlay} />

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
              <label></label>
              <LongNumber placeholder="0000 0000 0000 0000" name="longnumber" type="number" maxLength={16} />
              <Date placeholder="01/01" name="date" />
              <CVV placeholder="000" name="cvv" />
              <MasterCard />
            </Card>
          </Column>
          <Column>
            <Image image={"i6107"} />
            <H1Text>Bodyweight Finishers</H1Text>
            <SubtotalRow>
              <HeaderText>Subtotal</HeaderText>
              <HeaderText right>£100</HeaderText>
            </SubtotalRow>
            <SubtotalRow>
              <HeaderText>Shipping</HeaderText>
              <HeaderText right>Free</HeaderText>
            </SubtotalRow>
            <SubtotalRow>
              <HeaderText>VAT</HeaderText>
              <HeaderText right>£0</HeaderText>
            </SubtotalRow>
  
            <TotalRow>
              <HeaderText>Total</HeaderText>
              <HeaderText right>£100</HeaderText>
            </TotalRow>
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