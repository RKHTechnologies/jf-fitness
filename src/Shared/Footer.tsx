import React, { FC } from 'react';
import styled from 'styled-components';
import { SharedSettings } from '../Shared/SharedStyles';
import { ImagesDesktop } from '../Shared/ImageLib';

const FooterContainer = styled.footer`
  width: 100%;
  height: 80px;
  background: #1f1f1f;
  color: #a7a7a7;
  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    margin-top: 12px;
  }

  p {
    margin-top: 26px;
  }

  div:before {
    content: '';
    position: absolute;
    margin-left: -48px;
    margin-top: -14px;
    width: 40px;
    height: 40px;
    background: url(${ImagesDesktop['rkh']});
    background-size: cover;
  }

  @media(max-width: ${SharedSettings.mobile}) {
    flex-direction: column;
    padding-bottom: 15px;
    text-align: center;

    div { margin-left: 36px; }
  }
`;

const Footer: FC = () => {
  return (
    <FooterContainer>
      <p>Copyright © JF Fitness. All rights reserved.</p>
      <div>Site built by RKH Technologies</div>
    </FooterContainer>
  );
}

export default Footer;