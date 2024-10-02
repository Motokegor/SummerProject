import React from "react";
import "./settingsPage.scss";
import HeaderSettings from "../../Components/HeaderSettings/HeaderSettings.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import SettingsArrow from "../../img/settings-arrow.png";
import Light from "../../img/light.png";
import Dark from "../../img/dark.png";
export default function SettingsPage() {
  return (
    <div>
      <HeaderSettings />
      <div className="container-settings">
        <div className="box-settings">
          <p>Аккаунт</p>
          <img src={SettingsArrow} />
        </div>
        <div className="box-settings">
          <p>Цели</p>
          <img src={SettingsArrow} />
        </div>
        <div className="box-settings">
          <p>Устройства</p>
          <img src={SettingsArrow} />
        </div>
        <div className="box-settings">
          <p>Язык</p>
          <div className="box-settings-switch">
            <p>АНГ</p>
            <input type="checkbox" id="sleepCheckbox" />
            <p>РУС</p>
          </div>
        </div>
        <div className="box-settings">
          <p>Уведомления</p>
          <div className="box-settings-switch">
            <p>ВЫКЛ</p>
            <input type="checkbox" id="sleepCheckbox" />
            <p>ВКЛ</p>
          </div>
        </div>
        <div className="box-settings">
          <p>Тема</p>
          <div className="box-settings-switch">
            <img src={Light}/>
            <input type="checkbox" id="sleepCheckbox" />
            <img src={Dark}/>
          </div>
        </div>
        <div className="box-settings">
          <p>О приложении</p>
          <img src={SettingsArrow} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
