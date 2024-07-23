import React from "react";
import Header from "../../Components/Header/Header.jsx";
import startImg from "../../img/start-intouch.png";
import './startPage.scss'
import { useNavigate } from 'react-router-dom'; 

export default function StartPage() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/register');
  };

  const handleLoginClick = () => {
    navigate('/login'); 
  };

  return (
    <div>
      <Header />
      <h2 className="title-start">Lets get started!</h2>
      <img src={startImg} className="startImg" />
      <div className="input-selection">
        <div className="input-selection-sing">
          <p>Using INTOUCH for the first time?</p>
          <button onClick={handleSignUpClick}>Sign up</button> 
        </div>
        <div className="input-selection-log">
          <p>Already have an account?</p>
          <button onClick={handleLoginClick}>Log in</button> 
        </div>
      </div>
    </div>
  );
}