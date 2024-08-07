import React from "react";
import Home from "../../img/home.png";
import Tips from "../../img/tips.png";
import Heartbeat from "../../img/heartbeat.png";
import Document from "../../img/document.png";
import Settings from "../../img/settings.png";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
        <img src={Home} />
        <img src={Tips} />
        <img src={Heartbeat} />
        <img src={Document} />
        <img src={Settings} />
    </div>
  );
}
