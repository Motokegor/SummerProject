import React from "react";
import "./authorisationInput.scss";

export default function AuthorisationInput(props) {
  const { onInputChange, passwordError } = props;

  return (
    <div className="authorisation-form">
      <div>
        <p>Email</p>
        <input
          type="text"
          id="email-input"
          placeholder="user@gmail.com"
          onChange={onInputChange}
        />
      </div>
      <div>
        <p>Password</p>
        <input
          type="text"
          id="password-input"
          placeholder="Password"
          onChange={onInputChange}
          className={passwordError ? "error" : ""}
        />
      </div>
    </div>
  );
}
