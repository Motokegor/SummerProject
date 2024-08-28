import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../../Components/Footer/Footer.jsx";
import HeaderTips from "../../Components/HeaderTips/HeaderTips.jsx";
import './tips.scss';

export default function Tips() {
  const [tipsData, setTipsData] = useState([]);

  useEffect(() => {
    fetch('../../../db.json')
      .then(res => res.json())
      .then(data => setTipsData(data.tips));
  }, []);

  return (
    <div>
      <HeaderTips />
      <div className="tips-container">
        {tipsData.map((tip, index) => (
          <Link to={`/tips/${index}`} key={index} className="tip-box">
            <img src={tip.image} />
            <div className="tip-box-texts">
              <p className="tip-box-texts-title">{tip.title}</p>
              <p className="tip-box-texts-text">{tip.description}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}