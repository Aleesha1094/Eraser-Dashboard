import React, { useState, useEffect } from 'react';
import { links } from '../imageText/imglist';
import { Image } from 'react-bootstrap';
import './Rightimg.css';
import {text} from './txtlist';

interface RimageTextProps {
  index: number;
}

const RimageText: React.FC<RimageTextProps> = ({ index }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % links.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='container'>
        <div className='image-container'>
            <Image src={links[currentIndex].url} fluid />
        </div>
      <div className='rightcontent'>
        <div className='text-container'>
          <p className='text'>
            <span style={{ color: currentIndex === 0 ? 'black' : 'grey' }}>{text[index].txt1}</span>
          </p>
          <div className={`download-line ${currentIndex === 0 ? 'fill-line' : ''}`} />
          <p className='text'>
            <span style={{ color: currentIndex === 1 ? 'black' : 'grey' }}>{text[index].txt2}</span>
          </p>
          <div className={`download-line ${currentIndex === 1 ? 'fill-line' : ''}`} />
          <p className='text'>
            <span style={{ color: currentIndex === 2 ? 'black' : 'grey' }}>{text[index].txt3}</span>
          </p>
          <div className={`download-line ${currentIndex === 2 ? 'fill-line' : ''}`} />
        </div>
      </div>
    </div>
  );
}

export default RimageText;
