import {Button, Image} from 'react-bootstrap';
import RimageText from "../RightImage/rightimgtxt";
import './keyDesign.css';
import React, { useState, useEffect } from 'react';

function KeyDesigns() {
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
    <div className='keydiv'>
    <div className='keytxt'>
      <Image src={require('./keyboard.png')} className='imgkey' fluid />
      <p className='draw'>Draw at the speed of thought using our keyboard shortcuts and / commands to make everything within reach.</p>
      <div className='txtb'>
        <p>You'll never look back.</p>
        {windowWidth > 750 && (
        <Button variant="outline-dark" style={{  width: "12rem", height: "55px" }}>
          View Gallery ➜
        </Button>
        )}
      </div>
    </div>
      <RimageText index={1}/>
      <div className='keydiv'>
        <div className='getmore'>
          <p className='ptag'>Brainstorm and present in real-time. Leave comments for async iteration.</p>
          <h1 className='heading' style={{flex: '0.45'}}>Get more<br/> done together</h1>
          <p className='ptag'>A tool that lets you work with your team however it works for you.</p>
        </div>
        <RimageText index={2}/>
      </div>
    </div>
  );
}

export default KeyDesigns;
