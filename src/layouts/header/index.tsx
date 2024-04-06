import React, { useState } from 'react'
import styled from 'styled-components'
import { borderColor, mainColor, textColor } from '../../colors'
import Section from './Section'
import { useGetCurrentSection } from './useGetCurrentSection'

const Frame = styled.div`
    height: 50px;
    position: fixed;
    left: 50%;
    top: 10px;;
    transform: translateX(-50%);
    z-index: 999;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;
    background: ${mainColor};
    color: ${textColor};
    border: 2px solid ${borderColor};
    border-radius: 30px;
    width: 95%;

    @media (max-width: 1300px) {
      width: 85%;
    }
    
    @media (max-width: 450px) {
      width: 60%;
    }
`

const Title = styled.div`
    font-size: 35px;
    font-family: Anton, sans-serif;
    font-weight: 200;
    flex-grow: 1;
`

const Sections = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;

    /* 画面幅が小さい場合にメニューを非表示にする */
    @media (max-width: 1300px) {
        display: none;
    }
`

const MenuIcon = styled.div`
    display: none;

    /* 画面幅が小さい場合にメニューを表示する */
    @media (max-width: 1300px) {
        display: block;
        cursor: pointer;
    }
`

const StyledIcon = styled.i`
    width: 20px;
    padding: 9px 5px;
    transition: 0.3s;
    color: white;
`

const Space = styled.div`
    width: 100%;
    height: 150px;
    background: inherit;
`

export const MARGIN = 170;

interface Props {
    ref1: React.RefObject<HTMLDivElement>;
    ref2: React.RefObject<HTMLDivElement>;
    ref3: React.RefObject<HTMLDivElement>;
    ref4: React.RefObject<HTMLDivElement>;
}

const Header = ({ ref1, ref2, ref3, ref4 }: Props) => {

  const currentSection = useGetCurrentSection({ ref1, ref2, ref3, ref4 });
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    window.scroll({
      top: (ref.current as HTMLDivElement).offsetTop - MARGIN,
      behavior: 'smooth'
    });
    setShowMenu(false); // メニュー項目がクリックされた後にメニューを閉じる
  };

  return (
    <>
    <Frame>
        <MenuIcon onClick={toggleMenu}>
          <StyledIcon className="fa fa-bars" aria-hidden="true"/>
        </MenuIcon>

        <Title>
            {"Atsutoshi Honda"}
        </Title>
        <Sections>
            <Section text='Home' selected={currentSection==='HOME'} onClick={() => scrollToRef(ref1)}/>
            <Section text='Projects' selected={currentSection==='PROJECTS'} onClick={() => scrollToRef(ref2)}/>
            <Section text='Skills' selected={currentSection==='SKILLS'} onClick={() => scrollToRef(ref3)}/>
            <Section text='Contact' selected={currentSection==='CONTACT'} onClick={() => scrollToRef(ref4)}/>
        </Sections>
    </Frame>

    <Space/>
    </>
  )
}

export default Header
