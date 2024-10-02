import React from "react";
import "./headerSettings.scss";
import iconHome from "../../img/iconHome.png";

export default function HeaderSettings() {
  return (
    <div className="headerSettings">
      <h1 className="headerSettings-title">settings</h1>
      <img className="headerSettings-icon" src={iconHome} />
    </div>
  );
}
