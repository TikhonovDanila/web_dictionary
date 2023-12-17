import React from "react";

import "./index.css"

const avatar = require("../image/avatar.png");
const logo = require("../image/logo.png");

export const Author: React.FC = () => {
  return (
    <div className="navigation-logo-avatar-area">


      <div className="navigation-avatar" onClick={() => window.open("https://www.vk.com/tkhvds", '_blank')}>
        <img className="navigation-avatar-icon" src={avatar} alt="avatar"/>
        <b>ТИХОНОВ ДАНИЛА</b> (группа P4210)


      </div>
      <div className="navigation-logo" onClick={() => window.open("https://www.itmo.ru", '_blank')}>
        <img className="navigation-logo-icon" src={logo} alt="logo"/>
      </div>
    </div>
  );
}
