import React, { useState } from "react";
import Form from "../Form/Form.jsx";
import "./singUp.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../../store/slices/userSlice.js';

export default function SingUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [emailError, setEmailError] = useState(false); 
  const [passwordError, setPasswordError] = useState(false); 

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        navigate('/register-success'); 
      })
      .catch((error) => {
        setEmailError(false);
        setPasswordError(false);
        if (error.code === 'auth/email-already-in-use') {
          setEmailError(true); 
        } else if (error.code === 'auth/weak-password') {
          setPasswordError(true); 
        } else {
          alert('Registration failed. Please try again.'); 
        }
      });
  }
  const handleLoginClick = () => {
    navigate("/login"); 
  };

  return (
    <div>
      <h2>Create account</h2>
      <p className="authorisation-text">Sign up with your Email</p>
      <Form 
        handleClick={handleRegister}
        emailError={emailError}
        passwordError={passwordError}
      />
      <div className="register-box-text">
        <p>Already have an account?</p>
        <a onClick={handleLoginClick}>Log in</a>
      </div>
    </div>
  );
}