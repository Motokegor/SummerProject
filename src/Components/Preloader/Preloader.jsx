import React, { useState, useEffect } from 'react';
import "./preloader.scss"
import Subtract from "../../img/subtract.png"

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const handleLoad = () => {
        setIsLoading(false);
      };
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }, []);
  
    return (
      isLoading && (
        <div className="loader">
          <div className="spinner"><img src={Subtract}/></div>
          <p className='loader-title'>Connecting...</p>
          <p className='loader-text'>Please bring the device closer to the phone</p>
        </div>
      )
    );
}
