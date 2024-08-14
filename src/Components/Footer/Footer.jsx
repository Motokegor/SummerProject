import React, { useState, useEffect } from "react";
import Home from "../../img/home.png";
import Tips from "../../img/tips.png";
import Heartbeat from "../../img/heartbeat.png";
import Document from "../../img/document.png";
import Settings from "../../img/settings.png";
import "./footer.scss";
import { useNavigate, useLocation } from 'react-router-dom'; 

export default function Footer() {
  const navigate = useNavigate(); 
  const location = useLocation(); 
  const [hoveredImage, setHoveredImage] = useState(null);
  const [activeImage, setActiveImage] = useState(null); 

  useEffect(() => {
    if (location.pathname === '/home') {
      setActiveImage(Home);
    } else if (location.pathname === '/tips') {
      setActiveImage(Tips);
    } else if (location.pathname === '/statistic') {
      setActiveImage(Heartbeat);
    } else if (location.pathname === '/notes') {
      setActiveImage(Document);
    } else if (location.pathname === '/settingsPage') {
      setActiveImage(Settings);
    }
  }, [location]);

  return (
    <div className="footer">
      <img 
        src={Home} 
        onMouseEnter={() => setHoveredImage(Home)} 
        onMouseLeave={() => setHoveredImage(null)} 
        onClick={() => navigate('/home')} 
        alt="Домой" 
        className={hoveredImage === Home || activeImage === Home ? 'hovered' : ''}
      />
      <img 
        src={Tips} 
        onMouseEnter={() => setHoveredImage(Tips)} 
        onMouseLeave={() => setHoveredImage(null)} 
        onClick={() => navigate('/tips')} 
        alt="Советы" 
        className={hoveredImage === Tips || activeImage === Tips ? 'hovered' : ''} 
      />
      <img 
        src={Heartbeat} 
        onMouseEnter={() => setHoveredImage(Heartbeat)} 
        onMouseLeave={() => setHoveredImage(null)} 
        onClick={() => navigate('/statistic')} 
        alt="Статистика" 
        className={hoveredImage === Heartbeat || activeImage === Heartbeat ? 'hovered' : ''}
      />
      <img 
        src={Document} 
        onMouseEnter={() => setHoveredImage(Document)} 
        onMouseLeave={() => setHoveredImage(null)} 
        onClick={() => navigate('/notes')} 
        alt="Заметки" 
        className={hoveredImage === Document || activeImage === Document ? 'hovered' : ''}
      />
      <img 
        src={Settings} 
        onMouseEnter={() => setHoveredImage(Settings)} 
        onMouseLeave={() => setHoveredImage(null)} 
        onClick={() => navigate('/settingsPage')} 
        alt="Настройки" 
        className={hoveredImage === Settings || activeImage === Settings ? 'hovered' : ''} 
      />
    </div>
  );
}