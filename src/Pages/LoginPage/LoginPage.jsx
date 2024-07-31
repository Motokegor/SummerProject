import React, { useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Login from '../../Components/Login/Login.jsx'
import "./loginPage.scss";

export default function LoginPage() {

  return (
    <div>
      <Header />
      <Login/>
    </div>
  );
}
