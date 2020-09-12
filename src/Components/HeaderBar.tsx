import React, { useState } from 'react';
import logojf from '../logo.svg';
import styled from 'styled-components';
import { colours, SharedSettings } from '../Shared/SharedStyles';
import { useHistory } from 'react-router-dom';

interface IProps {
    stickyHeader?: boolean;
}

interface menuProps {
    menuOpen? : boolean;
}

const HeaderNav = styled.div`
    position: ${(p: IProps) => p.stickyHeader ? "fixed" : "absolute"};
    top: ${(p: IProps) => p.stickyHeader ? "0" : "100vh"};
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colours.light};
    z-index: 2;
`;

const HeaderNavContainer = styled.div` 
    width: 100%;
    max-width: ${SharedSettings.maxWidth};
    margin: auto;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${colours.light};
    color: ${colours.dark};
    z-index: 1;
    transition: height 0.3s ease;

    & > img {
        height: 68px;
        margin-left: 50px;

        @media(max-width: 350px) {
            margin-left: 10px;
        }
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
    letter-spacing: 2px;
    text-indent: 2px;
    padding: 20px 28px 14px;
    cursor: pointer;
    font-weight: 400;
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

    &:last-child {
        margin-right: 20px;
    }
`;

const NavItemsRightContainer = styled.div`
    display: flex;
    justify-content: center;
    overflow: hidden;
    transition: all 0.3s ease;

    @media( max-width: 1100px ) {
        flex-direction: column;
        align-self: flex-start;
        /* margin-top: 80px; */
        height: ${(p:menuProps) => p.menuOpen ? "80vh" : "0"};
        position: absolute;
        top: 80px;
        left: 20px;
        right: 20px;
        background: ${colours.dark};

        ${HeaderButton} {
            text-align: center;
            border-radius: 0;
            color: ${colours.light};
            padding: 0px 14px;
            display: flex;
            align-items: center;
            justify-content: center;

            &:last-child {
                margin-right: 0;
            }
        }
    }

    @media( max-width: 350px) {
        left: 5px;
        right: 5px;
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

    @media( max-width: 350px ) {
        right: 5px;
    }
`;

const HeaderBar: React.FC<IProps> = ({ stickyHeader }: IProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const history = useHistory();

    const handleNav = (link: string): void => {
        setMenuOpen(false);
        history.push(`${process.env.PUBLIC_URL}${link}`);
    }

    return (
      <HeaderNav stickyHeader={stickyHeader}>
        <HeaderNavContainer>
          <Logo src={logojf} alt="JF Fitness Logo" onClick={() => handleNav("")} />
          <BurgerContainer menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><Burger menuOpen={menuOpen} /></BurgerContainer>
          
          <NavItemsRightContainer menuOpen={menuOpen}>
            <HeaderButton onClick={() => handleNav("")}>HOME</HeaderButton>
            <HeaderButton onClick={() => handleNav("/onlinecoaching")}>1-2-1 ONLINE COACHING</HeaderButton>
            <HeaderButton onClick={() => handleNav("/onlineprograms")}>ONLINE PROGRAMS</HeaderButton>
            <HeaderButton onClick={() => handleNav("/ebooks")}>E-BOOKS</HeaderButton>
            <HeaderButton onClick={() => handleNav("/contact")}>CONTACT</HeaderButton>
          </NavItemsRightContainer>

        </HeaderNavContainer>
      </HeaderNav>
    );
}

export default HeaderBar;