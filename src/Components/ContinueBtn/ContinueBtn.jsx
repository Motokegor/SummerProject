import React from 'react';
import { useNavigate } from 'react-router-dom';
import './continueBtn.scss';

export default function ContinueBtn() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/home');
  };

  return (
    <div className='continueBtn'>
      <button className='btn' onClick={handleClick}>Continue</button>
    </div>
  );
}