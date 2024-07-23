import React, { useState, useEffect } from 'react';
import './descriptionPage.scss';
import Screensaver from '../../Components/Screensaver/Screensaver.jsx';
import Description from '../../Components/Description/Description.jsx';

export default function DescriptionPage() {
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDescription(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <div className='description'>
      {!showDescription && <Screensaver />}
      {showDescription && <Description />}
    </div>
  );
}