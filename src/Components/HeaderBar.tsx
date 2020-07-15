import React, { useState } from 'react';
import logojf from '../logo.svg';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';

interface menuProps {
    menuOpen? : boolean;
}

const HeaderNavContainer = styled.div` 
    width: 100%;
    max-width: ${SharedSettings.maxWidth};
    margin: auto;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: ${(p: IProps) => p.stickyHeader ? "fixed" : "absolute"};
    top: ${(p: IProps) => p.stickyHeader ? "0" : "100vh"};
    background: ${colours.light};
    color: ${colours.dark};
    z-index: 1;
    transition: height 0.3s ease;

    & > img {
        height: 68px;
        margin-left: 50px;
    }

    @media(min-width: ${SharedSettings.maxWidth}) {
        left: calc(50% - ${SharedSettings.maxWidthHalf});    
    }
`;

const Logo = styled.img`
    cursor: pointer;
`;


const HeaderButton = styled.a`
    height: 100%;
    background: transparent;
    color: ${colours.dark};
    border: none;
    letter-spacing: 5px;
    text-indent: 5px;
    padding: 32px 20px 26px;
    cursor: pointer;
    font-weight: 500;
    border-bottom: 2px solid transparent;
    font-size: 1em;
    text-decoration: none;
    
    &:hover {
      color: ${colours.primary} !important;
      border-color: ${colours.primary};
    }

    &:focus {
      outline: 0;
    }

    /* &:last-child {
        margin-right: 50px;
    } */
`;

const NavItemsRightContainer = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    transition: all 0.3s ease;

    @media( max-width: 1100px ) {
        flex-direction: column;
        align-self: flex-start;
        margin-top: 80px;
        transition: all 0.3s ease;
        height: ${(p:menuProps) => p.menuOpen ? "400px" : "0"};

        ${HeaderButton} {
            display: initial;
            margin-right: 20px;
            text-align: right;
            border-radius: 0;
            background: ${colours.dark};
            color: ${colours.light};
            padding: 28px 25px;
            border: 0;
        }
    }
`;

const Burger = styled.div`
    height: 3px;
    width: 40px;
    background: ${(p: menuProps) => p.menuOpen ? colours.primary : colours.dark};
    transition: all 0.5s ease;
    transition-property: height, width, transform;
    position: absolute;
    top: calc(50% - 12.5px);
    left: calc(50% - 20px);
    transform: ${(p: menuProps) => p.menuOpen ? "translateY(10px) rotate(45deg)" : ""};

    &:before, &:after {
        content: '';
        position: absolute;
        height: 3px;
        width: 40px;
        background: ${(p: menuProps) => p.menuOpen ? colours.primary : "inherit"};
        transition: transform 0.5s ease, opacity 0.5s ease;
    }

    &:before {
        margin-top: 10px;
        transform: ${(p: menuProps) => p.menuOpen ? "translateY(-10px) rotate(180deg)" : ""};
        opacity: ${(p: menuProps) => p.menuOpen ? "0" : "1"};
    }

    &:after {
        margin-top: 20px;
        transform: ${(p: menuProps) => p.menuOpen ? "translateY(-20px) rotate(-90deg)" : ""};
    }
`;


const BurgerContainer = styled.div`
    height: 80px;
    width: 100px;
    background: ${(p: menuProps) => p.menuOpen ? "#000" : "transparent"};
    position: relative;
    align-self: flex-end;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 20px;
    display: none;

    &:hover > ${Burger} {
        background: ${colours.primary};
    }

    @media( max-width: 1100px ) {
        display: initial;

    }
`;

interface IProps {
    stickyHeader?: boolean;
}

const HeaderBar: React.FC<IProps> = ({ stickyHeader }: IProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <HeaderNavContainer stickyHeader={stickyHeader}>
            <Logo src={logojf} alt="JF Fitness Logo" />
            <NavItemsRightContainer menuOpen={menuOpen}>
                <BurgerContainer menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Burger menuOpen={menuOpen} /></BurgerContainer>
                <HeaderButton href="#about" onClick={() => setMenuOpen(false)}>ABOUT</HeaderButton>
                <HeaderButton href="#testemonials" onClick={() => setMenuOpen(false)}>TESTEMONIALS</HeaderButton>
                <HeaderButton href="#partners" onClick={() => setMenuOpen(false)}>PARTNERS</HeaderButton>
                <HeaderButton href="#services" onClick={() => setMenuOpen(false)}>SERVICES</HeaderButton>
                <HeaderButton href="#contact" onClick={() => setMenuOpen(false)}>CONTACT</HeaderButton>
            </NavItemsRightContainer>
        </HeaderNavContainer>
    );
}

export default HeaderBar;