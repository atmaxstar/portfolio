import React, { useState, useEffect } from 'react';

type TargetViewPosition = 'NONE' | 'HOME' | 'PROJECTS' | 'SKILLS' | 'CONTACT';

const MARGIN = 200;

interface Props {
    ref1: React.RefObject<HTMLDivElement>;
    ref2: React.RefObject<HTMLDivElement>;
    ref3: React.RefObject<HTMLDivElement>;
    ref4: React.RefObject<HTMLDivElement>;
}

export function useGetCurrentSection({ ref1, ref2, ref3, ref4 }: Props) {
  const [targetViewPosition, setTargetViewPosition] = useState<
    TargetViewPosition
  >('NONE');
  

  useEffect(() => {
    const handleScroll = () => {

        if (ref4.current && window.scrollY >= ref4.current.offsetTop - MARGIN) {
            setTargetViewPosition('CONTACT');
        } else if (ref3.current && window.scrollY >= ref3.current.offsetTop - MARGIN) {
            setTargetViewPosition('SKILLS');
        } else if (ref2.current && window.scrollY >= ref2.current.offsetTop - MARGIN) {
            setTargetViewPosition('PROJECTS');
        } else if (ref1.current && window.scrollY >= ref1.current.offsetTop - MARGIN){
            setTargetViewPosition('HOME');
        } else {
            setTargetViewPosition('NONE');
        }
    }
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return targetViewPosition;
}