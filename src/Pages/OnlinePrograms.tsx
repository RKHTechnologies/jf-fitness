import React, { FC } from 'react';
import { colours, PageBodyContainer, SharedSettings } from '../Shared/SharedStyles';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { imageLib, ImagesDesktop } from '../Shared/ImageLib';

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TextOverlay = styled.div`
  font-size: 6vw;
  font-weight: 400;
  width: 100%;
  height: 65%;
  color: ${colours.light};
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.15);

  @media(max-width: ${SharedSettings.mobile}) {
    font-size: 10vw;
    font-weight: 600;
  }

  @media(max-width: 700px) {
    height: 300px;
  }  
`;

const ProductsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0 40px;
  margin-top: 20px;
  box-sizing: border-box;
  grid-gap: 40px;
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ImageProps {
  image: imageLib;
}

const Image = styled.div`
  width: 100%;
  /* padding-top: 100%; */
  background: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 10px;
  border-radius: 5px;
  min-height: 400px;
`;


const OnlinePrograms: FC = () => {
  return (
    <PageBodyContainer>
      <Hero image="gym" small />
      <TextOverlay>Online Programs</TextOverlay>

      <ProductsGrid>
        
        <Product>
          <Image image={"gym"} />
          <div>test</div>
        </Product>
        
        <Product>
          <Image image={"gym"} />
          <div>test</div>
        </Product>

        <Product>
          <Image image={"gym"} />
          <div>test</div>
        </Product>

      </ProductsGrid>
    </PageBodyContainer>
  );
}

export default OnlinePrograms;