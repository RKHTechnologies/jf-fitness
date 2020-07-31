import React, { FC } from 'react';
import styled from 'styled-components';

import gym1 from '../img/gym1.jpeg';
import gym2 from '../img/gym2.jpg';

const images = {
    'gym1': gym1,
    'gym2': gym2,
};

interface HeroProps {
    imageUrl: string;
    small?: boolean;
    imageHeight?: string
}

const HeroBanner = styled.div`
    width: 100%;
    height: ${(p: HeroProps):string => p.small ? "65vh" : "80vh"};
    text-align: center;
    background: #eee;
    background-image: url(${(p: HeroProps):string => p.imageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: ${(p: HeroProps):string => p.imageHeight ?? "center"};
    background-position-x: center;
`;


interface IProps {
    image: 'gym1' | 'gym2';
    small?: boolean;
    imageHeight?: string;
}

const Hero: FC<IProps> = ({image, small, imageHeight}: IProps) => {
    return (
        <HeroBanner imageUrl={images[image]} small={small} imageHeight={imageHeight} />
    );
}

export default Hero;