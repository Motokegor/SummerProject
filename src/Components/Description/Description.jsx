import React, { useState } from 'react';
import HeaderSkip from '../HeaderSkip/HeaderSkip.jsx';
import './description.scss'; 
import DescriptionText from '../DescriptionText/DescriptionText.jsx'; 
import { useNavigate } from 'react-router-dom'; 

export default function Description() {
  const navigate = useNavigate(); 
  const [currentText, setCurrentText] = useState(0); 
  const [showSecondButton, setShowSecondButton] = useState(false); 
  const [currentImage, setCurrentImage] = useState(0); 

  const handleNextClick = () => {
    if (currentText < texts.length - 1) {
      setCurrentText(currentText + 1);
      setCurrentImage(currentImage + 1); 
    } else {
      navigate('/startPage'); 
    }
    setShowSecondButton(true); 
  };

  const handleSecondButtonClick = () => {
    if (currentText > 0) {
      setCurrentText(currentText - 1);
      setCurrentImage(currentImage - 1); 
    }
  };

  const texts = [
    {
      h2: 'Welcome to Intouch!',
      p: 'Intouch is a powerful mobile app designed to track your baby\'s sleep time, monitor their environment, and get expert tips for their care',
    },
    {
      h2: 'Consistency is key!',
      p: 'Stick to a regular sleep schedule to promote healthy sleep habits for your baby',
    },
    {
      h2: 'Stay in touch',
      p: 'Stay informed about the environment at every moment you need it',
    },
    {
      h2: 'Statistics',
      p: 'Track your babys sleep time, monitor their environment, and get statistics in convenient format',
    },
    {
      h2: 'The ultimate baby care companion',
      p: 'Ensure your babys comfort and well-being with accurate sleep tracking, environmental monitoring, and personalized care advices',
    },
  ];

  return (
    <div className='all'>
      <HeaderSkip />
      <div >
      <DescriptionText 
           text={texts[currentText]} 
           onNextClick={handleNextClick}
           onSecondButtonClick={handleSecondButtonClick}
           showSecondButton={showSecondButton && currentText !== 0}
           buttonClass={showSecondButton ? 'narrow' : ''}
           currentImage={currentImage} 
        /> 
        </div>
    </div>
  );
}