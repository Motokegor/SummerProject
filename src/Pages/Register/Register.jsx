import React, { useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import AuthorisationInput from "../../Components/AuthorisationInput/AuthorisationInput.jsx";
import "./register.scss";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = () => {
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    const repeatPasswordInput = document.getElementById("repeat-password-input");

    if (emailInput.value && passwordInput.value && repeatPasswordInput.value) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSignUpClick = () => {
    navigate("/login");
  };

  return (
    <div>
      <Header />
      <h2>Create account</h2>
      <p className="authorisation-text">Sign up with your Email</p>
      <AuthorisationInput onInputChange={handleInputChange} />
      <div className="register-input">
        <div>
          <p>Repeat password</p>
          <input
            type="text"
            id="repeat-password-input"
            placeholder="Repeat password"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="register-box">
        <button className={`register-box-btn ${isFormValid ? "active" : ""}`}>
          Create
        </button>
        <div className="register-box-text">
          <p>Already have an account?</p>
          <a onClick={handleSignUpClick}>Log in</a>
        </div>
      </div>
    </div>
  );
}
