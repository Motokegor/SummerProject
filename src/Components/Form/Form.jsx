import { useState } from "react";
import "./form.scss"; 

export default function Form({ handleClick, loginError }) { 
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
          className={loginError === "auth/invalid-email" ? 'error' : ''} 
        />
        {loginError === "auth/invalid-email" && <p className="error-message">Invalid email format.</p>} 
      </div>
      <div>
        <p>Password</p>
        <input
          type="password"
          id="password-input"
          placeholder="Password"
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          className={loginError === "auth/wrong-password" ? 'error' : ''} 
        />
        {loginError === "auth/wrong-password" && <p className="error-message">Incorrect password.</p>} 
      </div>
      <button
        className="register-box-btn"
        onClick={() => handleClick(email, pass)}
      >
        Log in
      </button>
    </div>
  );
}