import React from "react";
import { useNavigate } from "react-router-dom"; 
import iconHome from "../../img/iconHome.png";
import Back from "../../img/back.png";
import "./headerTipsSkip.scss";

export default function HeaderTipsSkip() {
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate("/tips"); 
  };

  return (
    <div className="headerNote">
      <h1 className="headerNote-title">intouch</h1>
      <img className="headerNote-icon" src={iconHome} />
      <img
        className="headerNote-back"
        src={Back}
        onClick={handleBackClick} 
      />
    </div>
  );
}