import React from 'react'
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
`

const Title = styled.div`
    font-size: 35px;
    font-family: Anton, sans-serif;
    font-weight: 200;
    flex-grow: 1
`

const Sections = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`

const Space = styled.div`
    width: 100%;
    height: 90px;
    background: inherit;
`

interface Props {
    ref1: React.RefObject<HTMLDivElement>;
    ref2: React.RefObject<HTMLDivElement>;
    ref3: React.RefObject<HTMLDivElement>;
    ref4: React.RefObject<HTMLDivElement>;
}

const Header = ({ ref1, ref2, ref3, ref4 }: Props) => {

  const currentSection = useGetCurrentSection({ ref1, ref2, ref3, ref4 });
    
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    window.scroll({
      top: (ref.current as HTMLDivElement).offsetTop - 70,
      behavior: 'smooth'
    });
  };

  return (
    <>
    <Frame>
        <Title>
            {"Atsutoshi Honda"}
        </Title>
        <Sections>
            <Section text='Home' selected={currentSection=='HOME'} onClick={() => scrollToRef(ref1)}/>
            <Section text='Projects' selected={currentSection=='PROJECTS'} onClick={() => scrollToRef(ref2)}/>
            <Section text='Skills' selected={currentSection=='SKILLS'} onClick={() => scrollToRef(ref3)}/>
            <Section text='Contact' selected={currentSection=='CONTACT'} onClick={() => scrollToRef(ref4)}/>
        </Sections>
    </Frame>

    <Space/>
    </>
  )
}

export default Header
