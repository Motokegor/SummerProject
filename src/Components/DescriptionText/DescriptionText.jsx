import React from 'react';
import hatching from '../../img/hatching-chick.png';
import back from '../../img/Vector.png';
import baby  from '../../img/babyMoses.png';
import group from '../../img/Group.png';
import data from '../../img/data-analytics.png';
import picture from '../../img/picture.png';
import './descriptionText.scss';

export default function DescriptionText( props ) { 
  const { text, onNextClick, onSecondButtonClick, showSecondButton, currentImage } = props; 
  const buttonClass = showSecondButton ? 'narrow' : '';
  const getImage = () => {
    switch (currentImage) {
      case 0:
        return hatching; 
      case 1:
        return baby;
      case 2:
        return group;
      case 3:
        return data;
      case 4:
        return picture;
      default:
        return hatching;
    }
  };
  return (
    <div className='information'>
      <div>
        <img className='hatching' src={getImage()} alt="img" /> 
      </div>
      <div className='information-text'>
        <h2 className='information-text-title'>{text.h2}</h2>
        <p className='text'>{text.p}</p>
        <div className='information-text-buttons'>
          <button 
            className={`information-text-buttons-first-button ${buttonClass}`}  
            onClick={onNextClick} 
          >Next</button>
          {props.showSecondButton && <button className="information-text-buttons-second-button" onClick={onSecondButtonClick}><img src={back}/></button>}
        </div>
      </div>
    </div>
  );
}