import Cards from '../Card/card';
import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import RimageText from "../RightImage/rightimgtxt";
import KeyDesigns from '../keyboardDesign/keyDesign';
import './InBetween.css';

function InBetween() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
        <div>
            <div className='divstyle'>
                <h1 className='heading'>
                A diagram is worth<br/> one thousands words
                </h1>
                <p className='brain'>Brainstorming how to fit all those components together?<br/>Not everyone can easily grok your system architecture?</p>
                <p style={{marginBottom: '4rem'}} className='brain'> We know how it is. Communicate clearly with a visual doc.</p>
            </div>
            <RimageText index={0}/>
        </div>
        
        <KeyDesigns/>
        
        <div className="flex-container">
            <h1 className='heading' style={{ flex: 1, textAlign: 'left' }}>
                Loved by<br/>distributed teams
            </h1>
            {windowWidth > 900 && (
            <Button variant="dark" style={{  width: "12rem", height: "60px"}}>
                Try Eraser ➜
            </Button>
            )}
        </div>

        <Cards/>
    </div>
  );
}

export default InBetween;
