import { faPoundSign } from '@fortawesome/free-solid-svg-icons';
import React, { FC, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import PurchaseOverlay from '../../Components/PurchaseOverlay';
import { imageLib, ImagesDesktop } from '../../Shared/ImageLib';
import { key, StripeBuyNow } from '../../Shared/Products';
import { colours, SharedSettings } from '../../Shared/SharedStyles';
import { HashTagMini, Icon, IOverlayContent, Price } from '../OnlinePrograms';

const Container = styled.div`
  color: ${colours.light};
  max-width: 92vw;
  height: calc(100vh - 82px);
  margin-top: 82px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 100px;

  @media(max-width: ${SharedSettings.mobile}) {
    flex-wrap: wrap;
    margin-top: 0;
    margin: auto;
  }
`;

const Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  
  @media(max-width: ${SharedSettings.mobile}) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Right = styled.div`
  width: 800px;
  position: relative;

  @media(max-width: ${SharedSettings.mobile}) {
    width: 100%;
  }
`;


const Buy = styled.div`
  color: ${colours.primary};
  background: ${colours.primary}40;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  text-align: center;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  width: 300px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 12px 26px 5px;
  box-sizing: border-box;
  font-size: 1.4em;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  transition: box-shadow 0.1s ease;

  &:hover {
    background: ${colours.primary};
    color: rgb(255 255 255 / 0.90);
    box-shadow: 5px 8px 4px rgba(0,0,0,0.5)
  }

  @media(max-width: 500px) {
    width: calc(100% - 80px);
  }
`;

interface ImageProps {
  image: imageLib;
}

const Image = styled.div`
  background: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  max-width: 700px;
  width: 90%;
  height: 500px;
  margin: 0 50px;
  box-shadow: 0 2.8px 2.2px rgba(0,0,0,0.034), 0 6.7px 5.3px rgba(0,0,0,0.048), 0 12.5px 10px rgba(0,0,0,0.06), 0 22.3px 17.9px rgba(0,0,0,0.072), 0 41.8px 33.4px rgba(0,0,0,0.086), 0 100px 80px rgba(0,0,0,0.12);

  @media(max-width: 700px) {
    height: 350px;
    width: 100%;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 2.2em;
  font-weight: 300;
  color: rgb(255 255 255 / 0.88);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: auto;
  margin-bottom: 15px;
  line-height: 32px;
  
  @media(max-width: ${SharedSettings.mobile}) {
    margin: 0 0 20px;
    font-size: 2.2em;
    text-align: center;
  }

  @media(max-width: 500px) {
    font-size: 2em;
    text-align: center;
    margin: 0 0 20px;
  }
`;

const PriceContainer = styled.div`
  margin-top: 65px;

  & > div {
    bottom: 0;
  }

  @media(max-width: 500px) {
    margin: 30px auto 20px;

    & > div {
      bottom: 22px;
    }
  }

`;

const SubHeading = styled.div`
  color: rgb(255 255 255 / 0.88);
  font-weight: 400;
  font-size: 1.6em;
  margin-top: 40px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

const Description = styled.div`
  max-width: 800px;
  color: rgb(255 255 255 / 0.7);
  font-size: 1.2em;
  font-weight: 100;
  text-align: justify;
  margin: auto;
`;

const Testimonial = styled.div`
  font-style: italic;
  color: rgb(255 255 255 / 0.88);
  font-size: 1.2em;
  text-align: justify;
  padding: 30px 50px;
  box-sizing: border-box;
  max-width: 800px;
  position: relative;
  margin-top: 20px;
  background: rgb(255 255 255 / 0.05);
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  margin: auto;

  &:before {
    content: '“';
    color: ${colours.primary};
    position: absolute;
    top: -24px;
    left: 0px;
    font-size: 6em;
    z-index: -1;
    font-family: 'Oswald';
    opacity: 0.3;
  }
  
  &:after {
    content: '”';
    color: ${colours.primary};
    position: absolute;
    font-size: 6em;
    z-index: -1;
    font-family: 'Oswald';
    opacity: 0.3;
    bottom: -55px;
    right: 40px;
  }

  span {
    position: absolute;
    bottom: 15px;
    right: 50px;
  }

  @media(max-width: 540px) {
    font-size: 1.2em;
    padding: 30px 30px 50px;

    &:before {
      font-size: 2em;
      margin-top: -22px;
      margin-left: -24px;
    }

    &:after {
      font-size: 2em;
    }
  }
`;

interface IParams {
  ebook: string;
}

const EBook: FC = () => {
  let { ebook }: IParams = useParams();
  let title: string = "";
  let image: imageLib = "boxJump";
  let buyNow: key = "KB_ONLY_WORKOUTS";

  switch(ebook) {
    case "1": 
      title = "Bodyweight Finishers";
      image = "i5814";
      buyNow = 'BODYWEIGHT_FINISHERS'
      break;
    
    case "2":
      title = "DB Only Workouts";
      image = "i6107";
      buyNow = 'DB_ONLY_WORKOUTS'
      break;

    case "3":
      title = "KB Only Workouts";
      image = "i5496";
      buyNow = 'KB_ONLY_WORKOUTS'
      break;
  }

  const [OverlayOpen, setOverlayOpen] = useState(false);
  const [OverlayContent, setOverlayContent] = useState<IOverlayContent>({image: "i6107", title: "Order Summary", total: 0})

  const CloseOverlay = () => {
    setOverlayOpen(false);
  }

  const OpenOverlay = (Image: imageLib, Title: string, Total: number) => {
    setOverlayContent({
      image: Image,
      title: Title,
      total: Total
    })
    setOverlayOpen(true);
  }

  
  const handleBuyNow = () => {
    StripeBuyNow(buyNow);
  }


  return (
    <Container>
      <PurchaseOverlay open={OverlayOpen} image={OverlayContent.image} title={OverlayContent.title} total={OverlayContent.total} CloseOverlay={CloseOverlay} />
      <Left>
        <Image image={image} />
      </Left>

      <Right>
        <Title>{title}</Title>
        <Description>
          { ebook === "1" && (
            <>
              <div>Bodyweight finishers is the perfect addition to any workout. They can be used as add ons to the end of your existing workouts or standalone sessions. </div>
              <br />
              <div>Expect a full range of movements and a series of challenges that will test you to your limits.</div>
              <br />
              <div>Each session is designed to last between 5-30 minutes. No equipment needed and can be performed anywhere.</div>
              <HashTagMini>#BeYourOwnAthlete</HashTagMini>
            </>
          )}

          { ebook === "2" && (
            <>
              <div>DB only workouts is a great addition to the E-Book series and is designed to pack some serious punch.</div>
              <br />
              <div>Expect EMOMs and AMRAPs, Circuits and Intensity, and be prepared to develop some serious conditioning.</div>
              <br />
              <div>There are 20 high energy workouts which can complement your existing programme or be used solely on their own.</div>
              <br />
              <div>Expect to test your limits for 5-30 minutes and unlock that inner athlete.</div>
              <HashTagMini>#BeYourOwnAthlete</HashTagMini>
            </>
          )}

          { ebook === "3" && (
            <>
              <div>KB only workouts is a great addition to the E-Book series and is designed to pack some serious punch.</div>
              <br />
              <div>Expect EMOMs and AMRAPs, Circuits and Intensity, and be prepared to develop some serious conditioning.</div>
              <br />
              <div>There are 20 high energy workouts which can complement your existing programme or be used solely on their own.</div>
              <br />
              <div>Expect to test your limits for 5-30 minutes and unlock that inner athlete.</div>
              <HashTagMini>#BeYourOwnAthlete</HashTagMini>
            </>
          )}
        </Description>
        
        {/* <SubHeading>What the service offers</SubHeading>
        <Description>Pretium quam vulputate dignissim suspendisse in est ante in. Et tortor consequat id porta nibh venenatis cras sed. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Scelerisque purus semper eget duis at. Quis risus sed vulputate odio ut. Dolor morbi non arcu risus quis varius. Lacinia quis vel eros donec ac odio tempor orci. Netus et malesuada fames ac turpis egestas.</Description> */}

        <Testimonial>
          I have been working with James for a few years now and every session is so enjoyable and fun. To top it off, I feel more body confident now, than ever before
          <span>- Basma</span>
        </Testimonial>

        <PriceContainer>
          <Price>
            <Icon icon={faPoundSign} />
            <span>50</span>
          </Price>

          {/* <Buy onClick={() => OpenOverlay(image, title, 50)}>BUY NOW</Buy> */}
          <Buy onClick={handleBuyNow}>BUY NOW</Buy>
        </PriceContainer>

        
      </Right>

    </Container>
  );  
}

export default EBook;