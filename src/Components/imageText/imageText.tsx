import React, { useState, useEffect } from 'react';
import { links } from './imglist';
import { Image } from 'react-bootstrap';
import './imgtext.css';

function ImageText() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % links.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='container'>
        <div className='content'>
          <p className='text'>
            <span style={{ color: currentIndex === 0 ? 'black' : 'grey' }}>{links[0].txt1}</span>
          </p>
          <div className={`download-line ${currentIndex === 0 ? 'fill-line' : ''}`} />
          <p className='text'>
            <span style={{ color: currentIndex === 1 ? 'black' : 'grey' }}>{links[0].txt2}</span>
          </p>
          <div className={`download-line ${currentIndex === 1 ? 'fill-line' : ''}`} />
          <p className='text'>
            <span style={{ color: currentIndex === 2 ? 'black' : 'grey' }}>{links[0].txt3}</span>
          </p>
          <div className={`download-line ${currentIndex === 2 ? 'fill-line' : ''}`} />
        </div>
        <div className='image-container'>
          <Image src={links[currentIndex].url} fluid/>
        </div>
      </div>
    </div>
  );
}

export default ImageText;
