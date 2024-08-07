import React from "react";
import "./headerHome.scss";
import iconHome from "../../img/iconHome.png";

export default function HeaderHome() {
  return (
    <div className="headerHome">
      <h1 className="headerHome-title">intouch</h1>
      <img className="headerHome-icon" src={iconHome} />
    </div>
  );
}
