import React from 'react';
import './headerSkip.scss';
import { useNavigate } from 'react-router-dom'; 

export default function HeaderSkip() {
  const navigate = useNavigate(); 
  const handleSkipClick = () => {
    navigate('/startPage'); 
  };

  return (
    <div className='header'>
        <h1 className='header-title'>intouch</h1>
        <a className='header-skip' onClick={handleSkipClick}>Skip</a> 
    </div>
  );
}