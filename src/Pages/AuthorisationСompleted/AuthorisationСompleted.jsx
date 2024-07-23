import React, { useState, useEffect } from "react"; 
import Header from "../../Components/Header/Header.jsx";
import ContinueBtn from "../../Components/ContinueBtn/ContinueBtn.jsx";
import "./authorisationСompleted.scss";
import { useLocation } from "react-router-dom";

export default function AuthorisationСompleted() {
  const location = useLocation(); 
  const [message, setMessage] = useState(""); 

  useEffect(() => {
    if (location.pathname === "/register-success") {
      setMessage("Account successfully created"); 
    } else if (location.pathname === "/login-success") {
      setMessage("You’ve successfully logged in"); 
    }
  }, [location.pathname]); 

  return (
    <div>
      <Header />
      <div className="box">
      <h2 className="box-message">{message}</h2> 
      <ContinueBtn/>
      </div>
    </div>
  );
}