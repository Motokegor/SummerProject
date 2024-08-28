import React from "react";
import "./headerTips.scss";
import iconHome from "../../img/iconHome.png";

export default function HeaderTips() {
  return (
    <div className="headerTips">
      <h1 className="headerHome-title">tips</h1>
      <img className="headerHome-icon" src={iconHome} />
    </div>
  );
}
