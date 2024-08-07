import React, { useState } from "react";
import Form from "../Form/Form.jsx";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice.js";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUpClick = () => {
    navigate("/register");
  };

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        navigate('/login-success'); 
      })
      .catch(() => alert('Invalid user!'))
  }

  return (
    <div>
      <h2>Log in</h2>
      <p className="authorisation-text">Log in with your Email</p>
      <Form handleClick={handleLogin} />
      <div className="login-box">
        <div className="login-box-text">
          <p>Don’t have an account?</p>
          <a onClick={handleSignUpClick}>Sign up</a>
        </div>
      </div>
    </div>
  );
}