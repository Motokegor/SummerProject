import React, { useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import AuthorisationInput from "../../Components/AuthorisationInput/AuthorisationInput.jsx";
import { useNavigate } from "react-router-dom";
import "./login.scss";

export default function Login() {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = () => {
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");

    if (emailInput.value && passwordInput.value) { 
      setIsFormValid(true); 
    } else {
      setIsFormValid(false);
    }
  };

  const handleLoginClick = () => {
    // Симулируем успешный вход 
    navigate("/login-success"); 
  };

  const handleSignUpClick = () => {
    navigate("/register");
  };

  return (
    <div>
      <Header />
      <h2>Log in</h2>
      <p className="authorisation-text">Log in with your Email</p>
      <AuthorisationInput onInputChange={handleInputChange} />
      <div className="login-box">
        <button className={`login-box-btn ${isFormValid ? "active" : ""}`} onClick={handleLoginClick}>
        Create
        </button>
        <div className="login-box-restore">
          <p>Forget password?</p>
          <a>Restore</a>
        </div>
        <div className="login-box-text">
          <p>Don’t have an account?</p>
          <a onClick={handleSignUpClick}>Sign up</a>
        </div>
      </div>
    </div>
  );
}