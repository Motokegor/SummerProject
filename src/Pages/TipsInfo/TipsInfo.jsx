import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import HeaderTipsSkip from "../../Components/HeaderTipsSkip/HeaderTipsSkip.jsx";
import './tipsInfo.scss';
import Footer from "../../Components/Footer/Footer.jsx";

export default function TipsInfo() {
  const [tip, setTip] = useState(null); 
  const { id } = useParams(); 

  useEffect(() => {
    fetch('../../../db.json') 
      .then(res => res.json())
      .then(data => setTip(data.tips[parseInt(id)])); 
  }, [id]);

  if (!tip) {
    return <div>Loading tip...</div>; 
  }
  return (
    <div>
        <HeaderTipsSkip/>
        <div className="tips-img">
            <img src={tip.image}/>
        </div>
        <div className="tips-information">
            <h4 className='tips-information-title'>{tip.title}</h4>
            <p className='tips-information-text'>{tip.information}</p>
        </div>
        <Footer />
    </div>
  )
}