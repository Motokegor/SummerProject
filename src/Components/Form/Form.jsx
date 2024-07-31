import { useState } from "react";
import "./form.scss"; 

export default function Form({ handleClick, emailError, passwordError }) { 
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="authorisation-form">
      <div>
        <p>Email</p>
        <input
          type="email"
          id="email-input"
          placeholder="user@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className={emailError ? 'error' : ''} 
        />
        {emailError && <p className="error-message">Email already in use!</p>} 
      </div>
      <div>
        <p>Password</p>
        <input
          type="password"
          id="password-input"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          className={passwordError ? 'error' : ''} 
        />
        {passwordError && <p className="error-message">Password must be at least 6 characters long!</p>} 
      </div>
      <button
        className="register-box-btn"
        onClick={() => handleClick(email, pass)}
      >
        Create
      </button>
    </div>
  );
}