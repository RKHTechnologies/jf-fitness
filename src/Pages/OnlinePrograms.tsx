import React, { FC, useRef, useState } from 'react';
import { colours, PageBodyContainer, SharedSettings } from '../Shared/SharedStyles';
import styled from 'styled-components';
import Hero from '../Shared/Hero';
import { imageLib, ImagesDesktop } from '../Shared/ImageLib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faDumbbell, faHeartbeat, faPoundSign } from '@fortawesome/free-solid-svg-icons';
import { PageDescription } from './E-Books/EBooks';
import { Section } from './Home';
import PurchaseOverlay from '../Components/PurchaseOverlay';
import Footer from '../Shared/Footer';
import { key, StripeBuyNow } from '../Shared/Products';

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

interface IOverlay {
  small?: boolean;
}

export const Overlay = styled.div`
  width: 100%;
  height: ${(p: IOverlay) => p.small ? "65%" : "85%"};
  background: rgba(255,255,255,0.15);
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after { 
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(180deg, rgba(18,18,18,0) 0%, rgb(18 18 18) 100%);
  }

  @media(max-width: 700px) {
        height: 40%;
    }
`;

export const TextOverlay = styled.div`
  font-size: 5em;
  font-weight: 400;
  color: ${colours.primary};
  text-transform: uppercase;
  line-height: 56px;
  background: #1f1f1f;
  margin: 10px auto 40px;
  padding: 26px 19px 0;
  font-weight: 200;
  text-align: center;

  @media(max-width: 700px) {
    font-size: 4em;
    padding: 22px 15px 0;
  }  

  @media(max-width: 450px) {
    font-size: 3em;
  }
`;

export const ProductsGrid = styled.div`
  width: 94%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 40px;
  padding-top: 20px;
  box-sizing: border-box;
  grid-gap: 20px;
  background: #121212;
  position: relative;
  margin: auto;

  @media(max-width: ${SharedSettings.mobile}) {
    grid-template-columns: 1fr;
  }

  @media(max-width: 800px) {
    padding: 0 10px;
  }

  @media(max-width: 600px) {
    width: 100%;
  }
`;

export const HashTag = styled.div`
  font-size: 1.6em;
  color: ${colours.primary};
  margin-top: 30px;
  font-style: italic;
  
  @media(max-width: 1100px) {
    margin: 30px 20px 0;
    font-size: 1.4em;
  }
  
  @media(max-width: 500px) {
    margin: 30px 0 0;
  }
`;

export const HashTagMini = styled(HashTag)`
  font-size: 1.2em !important;
  margin: 15px 0 !important;
`;

const Product = styled.div`
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  transition: transform 0.3s ease;
  margin-bottom: 80px;
  background: rgba(255,255,255, 0.12);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
  position: relative;
  display: grid;  
  grid-template-areas: 
    'title image'
    'overview image'
    'overview image'
    'requirements image'
    'equipment image'
    'expect image'
    'expect price'
    'expect price';
    
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  grid-row-gap: 0;
  grid-template-columns: 700px auto;

  @media(max-width: 1170px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'image'
      'overview'
      'requirements'
      'equipment'
      'expect'
      'price';
  }
`;

const ComingSoon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: 'COMING SOON';
    font-size: 8vw;
    color: ${colours.light};
    letter-spacing: 10px;
    font-weight: 100;
    transform: rotate(18deg);
  }
`;


interface ImageProps {
  image: imageLib;
}

export const Image = styled.div`
  grid-area: image;
  width: 100%;
  background: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 10px;
  border-radius: 5px;
  min-height: 400px;

  @media(max-width: 1170px) {
    min-height: 450px;
  }

  @media(max-width: 700px) {
    min-height: 300px;
  }
`;

const Title = styled.h1`
  grid-area: title;
  width: 100%;
  color: ${colours.primary};
  font-size: 4em;
  font-weight: 300;
  margin: 0;
  text-transform: uppercase;

  small {
    font-size: 0.7em;
  }

  @media(max-width: 700px) {
    font-size: 3em;
    text-align: center;
  }
`;

const Overview = styled.div`
  width: 100%;
  color: rgb(255 255 255 / 0.7);
  text-align: justify;
  font-size: 1.2em;
  font-weight: 100;

  & > ul {
    margin-top: 5px;
    margin-left: 15px;

    @media(max-width: 700px) {
      margin-left: -22px;
    }
  }
`;

interface ISectionProps {
  height: number;
}

const ProductSection = styled.div`
  /* min-height: ${(p: ISectionProps) => p.height}px; */
`;

const OverviewSection = styled(ProductSection)`
  grid-area: overview;
  
  @media(max-width: 700px) {
    margin-bottom: 40px;
    margin-top: 20px;
  }
`;
const Requirements = styled(ProductSection)`
  grid-area: requirements;
`;
const Equipment = styled(ProductSection)`
  grid-area: equipment;
`;
const Expect = styled(ProductSection)`
  grid-area: expect;
`;

const ProgramDetail = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 450px) {
    flex-wrap: wrap;
    height: 90px;
    margin-bottom: 20px;
  }
  
  p {
    color: rgb(255 255 255 / 0.7);
    font-size: 1.2em;
    width: calc(100% - 168px);
    margin: 12px auto 6px 6px;

    @media(max-width: 1280px) {
      height: 80px;
      margin-top: 50px;
      font-size: 1em;
    }

    @media(max-width: 450px) {
      width: 100%;
      height: auto;
      margin-top: 20px;
    }

    span {
      color: ${colours.primary};
    }
  }
`;

const LastProgramDetail = styled(ProgramDetail)`
  margin-bottom: 0 !important;

  @media(max-width: 450px) {
    margin-top: 10px;

    p {
      margin-top: -10px;
    }
  }

  
`;

interface IButtonProps {
  secondary?: boolean;
  wide?: boolean;
}

export const Button = styled.div`
  color: ${(p: IButtonProps) => p.secondary ? "#868686" : colours.primary};
  background: ${(p: IButtonProps) => p.secondary ? "transparent" : `${colours.primary}40`};
  border-radius: 5px;
  text-transform: uppercase;
  padding: 12px 26px 6px;
  cursor: pointer;
  width: ${(p: IButtonProps) => p.wide ? '100%' : '100px'};
  text-align: center;
  border: 2px solid ${(p: IButtonProps) => p.secondary ? "#696969" : "transparent"};

  &:hover {
    background: ${(p: IButtonProps) => p.secondary ? "#868686" : colours.primary};
    border-color: ${(p: IButtonProps) => p.secondary ? "#868686" : colours.primary};
    color: rgb(255 255 255 / 0.90);
  }

  @media(max-width: 450px) {
    width: 100%;
    margin-top: -10px;
  }
`;

const SubHeading = styled.div`
  color: ${colours.light};
  font-weight: 400;
  font-size: 1.8em;
  display: flex;
  align-items: center;

  div {
    margin-top: 9px;
    text-transform: uppercase;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  height: 32px;
  color: ${colours.light};
  margin-right: 20px;
  min-width: 32px;
`;

export const Price = styled.div`
  grid-area: price;
  color: ${colours.primary};
  font-size: 1.8em;
  margin-top: 5px;

  ${Icon} {
    color: ${colours.primary};
    min-width: 32px;
    margin-right: 0;
    height: 26px;
  }
`;

export const Detail = styled.div`
  color: rgb(255 255 255 / 0.7);
  text-align: left;
  width: calc(100% - 250px);
  margin: 15px auto 8px;
  font-size: 1.2em;

  @media(max-width: 450px) {
    width: calc(100% - 72px);
    text-align: center;
  }
`;

const BuyNow = styled.div`
  color: ${colours.primary};
  background: ${colours.primary}40;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 12px 26px 6px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  right: 20px;

  &:hover {
    background: ${colours.primary};
    color: rgb(255 255 255 / 0.90);
  }
`;

const List = styled.ul`
  color: rgb(255 255 255 / 0.7);
  font-size: 1.2em;
`;

const handleEmail = () => {
  window.open(
    'mailto:contact@jf-fitness.com',
    '_blank'
  );
}

export interface IOverlayContent {
  image: imageLib;
  title: string;
  total: number;
}

const OnlinePrograms: FC = () => {
  
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

  const handleBuyNow = (product: key) => {
    StripeBuyNow(product);
  }

  return (
    <PageBodyContainer>
      <PurchaseOverlay open={OverlayOpen} image={OverlayContent.image} title={OverlayContent.title} total={OverlayContent.total} CloseOverlay={CloseOverlay} />
      <Hero image="i5052" />
      <Overlay />

      <Section id="description" lastItem>
        <div className="wrapper">
          <TextOverlay>Online Programs</TextOverlay>
          <PageDescription>
            JF Fitness has designed several pre-recorded programmes which are centred around functional fitness. 
            <br /><br />
            Whether you are looking to develop mobility, build strength and muscle, lose body fat or perform better, these programmes have it all. 
            <br /><br />
            Each program follows a carefully structured and progressive 12-week plan, ensuring key fundamental movement patterns are present throughout. 
            <br /><br />
            If you are looking for structure, guidance, and a program that will take your training to the next level, look no further.
            <HashTagMini>#BeYourOwnAthlete</HashTagMini>
          </PageDescription>
        </div>
      </Section>
      
      <ProductsGrid>  
        <Product>
          <Image image={"boxJump"} />
          <Title>Functional Fitness <small>vol</small>.1</Title>
          <OverviewSection height={160}>
            <Overview>
              This is volume 1 of our Functional Fitness 12-week programs. 
              <br /><br />
              This plan will improve the way you move. It will increase your strength and muscle mass. It will develop a serious capacity. On top of that, It incorporates structured progressions week on week, to ensure continuous improvement and motivation, whilst developing aesthetics and athletic ability.
            </Overview>
            <HashTagMini>#BeYourOwnAthlete</HashTagMini>
          </OverviewSection>

          <Requirements height={140}>
            <SubHeading>
              <Icon icon={faCalendarCheck} />
              <div>Requirements</div>
            </SubHeading>
            <Overview>
              <ul>
                <li>A good understanding of how to perform key fundamental movement patterns e.g. Squat, Deadlift, Lunge, Pull Up, Push Up, etc.</li>
              </ul>
            </Overview>
          </Requirements>

          <Equipment height={160}>
            <SubHeading>
              <Icon icon={faDumbbell} />
              <div>Equipment</div>
            </SubHeading>
            <Overview>
              <ul>
                <li>Barbell &amp; Plates</li>
                <li>Kettlebells</li>
                <li>Dumbbells</li>
                <li>Cardio Equipment - Ski Erg, Bike Erg, Assault Bike, Rower, Treadmill</li>
              </ul>
            </Overview>
          </Equipment>

          <Expect height={100}>
            <SubHeading>
              <Icon icon={faHeartbeat} />
              <div>What to Expect</div>
            </SubHeading>
            <Overview>
              <ul>
                <li>Downloadable PDF</li>
                <li>4 Weekly Workouts</li>
                <li>Week On Week Progress</li>
              </ul>
            </Overview>
          </Expect>
          
          <ProgramDetail>
            <Price>
                <Icon icon={faPoundSign} />
                <span>150</span>
            </Price>
            <Detail>12 Week Plan</Detail>
            {/* <Button onClick={() => OpenOverlay("boxJump", "Functional Fitness -   12 Week plan", 150)}>Buy Now</Button> */}
            <Button onClick={() => handleBuyNow('FF12')}>Buy Now</Button>
          </ProgramDetail>

          <LastProgramDetail>
            <p>For further information or if you have any questions, please get in touch</p>
            <Button secondary onClick={handleEmail}>EMAIL US</Button>
          </LastProgramDetail>
        </Product>
        


        <Product>
          <ComingSoon />
          <Image image={"holdUpBar"} />
          <Title>Functional Fitness <small>vol</small>.2</Title>
          <OverviewSection height={180}>
            <Overview>
              Strength training is key to becoming more robust and should be fundamental in all training programs.
              <br /><br />
              The purpose of this program is to create central nervous demand/stress, along with mechanical stress, to increase muscle size/density, bone and joint health, structural integrity, and an increased metabolism.
              <br /><br />
              If you are looking to push past plateaus, gain serious strength and muscle, whilst adhering to a carefully structured and progressive program, this is the program for you.
              <HashTagMini>#BeYourOwnAthlete</HashTagMini>
            </Overview>
          </OverviewSection>

          <Requirements height={140}>
            <SubHeading>
              <Icon icon={faCalendarCheck} />
              <div>Requirements</div>
            </SubHeading>
            <Overview>
              <ul>
                <li>Must not be new to exercise</li>
                <li>Able to perform fundamental movement patterns adequately (squat, deadlift, bench, pull up, plank, lunge, carrys, etc)</li>
                <li>Training level - Beginner/Intermediate/Advanced</li>
              </ul>  
            </Overview>          
          </Requirements>

          <Equipment height={160}>
            <SubHeading>
              <Icon icon={faDumbbell} />
              <div>Equipment</div>
            </SubHeading>
            {/* <Overview>You will access to at least one of the following, the more the better:</Overview> */}
            <Overview>
              <ul>
                <li>Barbell &amp; Plates</li>
                <li>Kettlebell</li>
                <li>Dumbbells</li>
                <li>Cardio Equipment (Ski Erg, Bike Erg, Assault Bike, Rower, Treadmill, etc.)</li>
              </ul>
            </Overview>
          </Equipment>

          <Expect height={100}>
            <SubHeading>
              <Icon icon={faHeartbeat} />
              <div>What to Expect</div>
            </SubHeading>
            <Overview>
              <ul>
                <li>4 day training split (Upper, Lower, Full Body, Conditioning session)</li>
              </ul>
            </Overview>
          </Expect>
         
          <ProgramDetail>
            <Price>
                <Icon icon={faPoundSign} />
                <span>150</span>
            </Price>
            <Detail>12 Week Plan</Detail>
            {/* <Button onClick={() => OpenOverlay("holdUpBar", "Strength - 12 Week plan", 150)}>Buy Now</Button> */}
            <Button onClick={() => handleBuyNow('Strength12')}>Buy Now</Button>
          </ProgramDetail>

          <LastProgramDetail>
            <p>For further information or if you have any questions, please get in touch</p>
            <Button secondary onClick={handleEmail}>EMAIL US</Button>
          </LastProgramDetail>
        </Product>

      </ProductsGrid>

      <Footer />
    </PageBodyContainer>
  );
}

export default OnlinePrograms;