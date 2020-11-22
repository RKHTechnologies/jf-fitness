import { faPoundSign } from '@fortawesome/free-solid-svg-icons';
import React, { FC } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { imageLib, ImagesDesktop } from '../../Shared/ImageLib';
import { colours } from '../../Shared/SharedStyles';
import { Icon, Price } from '../OnlinePrograms';

const Container = styled.div`
  color: ${colours.light};
  max-width: 98vw;
  height: calc(100vh - 82px);
  margin-top: 82px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 100px;
`;

const Left = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;

const Right = styled.div`
  width: 800px;
  position: relative;
`;


interface ImageProps {
  image: imageLib;
}

const Image = styled.div`
  background: url(${(p: ImageProps) => ImagesDesktop[p.image]});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  width: 700px;
  height: 500px;
  margin: 0 50px;
  box-shadow: 0 2.8px 2.2px rgba(0,0,0,0.034), 0 6.7px 5.3px rgba(0,0,0,0.048), 0 12.5px 10px rgba(0,0,0,0.06), 0 22.3px 17.9px rgba(0,0,0,0.072), 0 41.8px 33.4px rgba(0,0,0,0.086), 0 100px 80px rgba(0,0,0,0.12);
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 3.5em;
  margin: 0;
  margin-bottom: 20px;
  font-weight: 300;
  height: 50px;
  color: rgb(255 255 255 / 0.88);
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const PriceContainer = styled.div`
  margin-top: 65px;

  & > div {
    bottom: 0;
  }
`;

// const PriceHeader = styled(Price)`
//   position: unset;
// `;

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
  color: #818999;
  font-size: 1.1em;
  text-align: justify;
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

  &:before {
    content: '"';
    position: absolute;
    color: ${colours.primary};
    margin-top: -27px;
    margin-left: -50px;
    font-size: 3em;
    font-family: fantasy;
  }
  
  &:after {
    content: '"';
    position: absolute;
    color: ${colours.primary};
    margin-bottom: 27px;
    margin-right: 50px;
    font-size: 3em;
    font-family: fantasy;
  }

  span {
    position: absolute;
    bottom: 15px;
    right: 50px;
  }

  @media(max-width: 540px) {
    font-size: 1.2em;

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

  switch(ebook) {
    case "1": 
      title = "Bodyweight Finishers";
      image = "i6969";
      break;
    
    case "2":
      title = "AMRAP's & EMOM's";
      image = "i5496";
      break;

    case "3":
      title = "DB Only Workouts";
      image = "i6107";
      break;
  }

  return (
    <Container>
      <Left>
        <Image image={image} />
      </Left>

      <Right>
        <Title>{title}</Title>
        <Description>
          { ebook === "1" && (
            <>
              <div>Train the JF Fitness way, learn to use Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
              <br />
              <div>Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Feugiat pretium nibh ipsum consequat. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Praesent tristique magna sit amet purus gravida quis. </div>
            </>
          )}

          { ebook === "2" && (
            <>
              <div>When it comes to building core strength, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <br />
              <div>Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Feugiat pretium nibh ipsum consequat. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Praesent tristique magna sit amet purus gravida quis. </div>
            </>
          )}

          { ebook === "3" && (
            <>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
              <br />
              <div>Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Feugiat pretium nibh ipsum consequat. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Praesent tristique magna sit amet purus gravida quis. </div>
            </>
          )}
        </Description>
        
        <SubHeading>What the service offers</SubHeading>
        <Description>Pretium quam vulputate dignissim suspendisse in est ante in. Et tortor consequat id porta nibh venenatis cras sed. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Scelerisque purus semper eget duis at. Quis risus sed vulputate odio ut. Dolor morbi non arcu risus quis varius. Lacinia quis vel eros donec ac odio tempor orci. Netus et malesuada fames ac turpis egestas.</Description>

        <Testimonial>
          I have been working with James for a few years now and every session is so enjoyable and fun. To top it off, I feel more body confident now, than ever before
          <span>- Basma</span>
        </Testimonial>

        <PriceContainer>
          <Price>
            <Icon icon={faPoundSign} />
            <span>50</span>
          </Price>

          <Buy>BUY NOW</Buy>
        </PriceContainer>

        
      </Right>

    </Container>
  );  
}

export default EBook;