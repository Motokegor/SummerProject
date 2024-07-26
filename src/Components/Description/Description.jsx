import React, { useState, useEffect } from 'react';
import HeaderSkip from '../HeaderSkip/HeaderSkip.jsx';
import './description.scss'; 
import DescriptionText from '../DescriptionText/DescriptionText.jsx'; 
import { useNavigate } from 'react-router-dom'; 

export default function Description() {
  const navigate = useNavigate(); 
  const [currentText, setCurrentText] = useState(0); 
  const [showSecondButton, setShowSecondButton] = useState(false); 
  const [currentImage, setCurrentImage] = useState(0); 
  const [texts, setTexts] = useState([]); 

  useEffect(() => {
    fetch('./db.json') 
      .then(response => response.json())
      .then(data => setTexts(data.texts))
      .catch(error => {
        console.error("Ошибка загрузки db.json:", error); 
      });
  }, []);

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

  return (
    <div className='all'>
      <HeaderSkip />
      <div >
        {texts.length > 0 && (
          <DescriptionText 
            text={texts[currentText]} 
            onNextClick={handleNextClick}
            onSecondButtonClick={handleSecondButtonClick}
            showSecondButton={showSecondButton && currentText !== 0}
            buttonClass={showSecondButton ? 'narrow' : ''}
            currentImage={currentImage} 
          /> 
        )}
      </div>
    </div>
  );
}