import React, { useState, useEffect } from 'react';
import './screensaver.scss';
import img from '../../img/intouch.png';

export default function Screensaver() {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const animation = 'screensaverAnimation'; 
    setAnimationClass(animation);

    return () => setAnimationClass('');
  }, []);

  return (
    <div className='intouchImg'>
          <img src={img} alt="img" className={animationClass} />
    </div>
  );
}