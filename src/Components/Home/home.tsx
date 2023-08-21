import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import "./home.css";
import React, { useState, useEffect } from 'react';
import { links } from '../list';
import { FaGooglePlay } from 'react-icons/fa';

function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const openVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const centerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '100px', 
  };

  const btn: React.CSSProperties = {  boxShadow: '0 0 30px rgba(128, 128, 128, 0.5)',fontWeight: 'bolder',position: 'absolute', top: '50%', left: '50%', 
  borderRadius: '70px', width:'20%', height: 'auto',
   backgroundColor:'rgba(40,102,223,.85)',
   whiteSpace: 'nowrap', 
   overflow: 'hidden',
   transform: 'translate(-50%, -50%)',
   textAlign: 'center',
  }
  
  if (windowWidth <= 1067) {
    btn.width = '30%';
    btn.fontSize = '17px';
    btn.padding = '5px 15px';

    if (windowWidth <= 650) {
      btn.width = '30%';
      btn.fontSize = '12px';
      btn.padding = '3px 12px';
    }

    if (windowWidth <= 450) {
      btn.width = '40%';
      btn.fontSize = '10px';
      btn.fontWeight = 'normal';
      btn.padding = '3px 12px';
    }
  }

  return (
    <div style={centerStyle}>
      <Image style={{ maxWidth: '50%', height: 'auto', margin: '4.5vw 3vw', width: '21%' }} src={links[0].url} fluid />
      <h1 className='heading'>The Whiteboard</h1>
    <h1 className='heading' style={{marginBottom: '3vw'}}>for Engineering Teams</h1>
    {windowWidth > 750 && (
      <Button variant="dark" >Try Eraser  ➜</Button>
    )}
      <div className='video'>
        <Image src={links[1].url} fluid />
        <Button style={btn} className='imgbtn' variant="outline-primary" size="lg" onClick={openVideo} active>
          <FaGooglePlay/> Watch Demo<p style={{ fontSize: '10px'}}>3 mins</p>
        </Button>
        {isVideoOpen && (
        <div
          className='videoopen'
          onClick={closeVideo}
        >
          <iframe width="760" height="515" src={links[2].url} title="YouTube video player" allowFullScreen></iframe>
        </div>
      )}
      </div>
    </div>
  );
}

export default Home;
