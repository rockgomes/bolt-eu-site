import React from "react";
import "./header.css";
import mainimage from "../../assets/index-header.webp";
import { FaArrowRight } from "react-icons/fa";
import { ReactComponent as AppleLogo } from "../../assets/applestore.svg";
import { ReactComponent as GplayLogo } from "../../assets/gplay.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container-text">
          <div className="header__container-text_title">
            <h1>The fast, affordable way to ride.</h1>
          </div>
          <div className="header__container-text_download">
            <p>Download the Bolt app</p>
            <div className="header__container-text_download-svgs">
              <AppleLogo />
              <GplayLogo />
            </div>
          </div>
          <div className="header__container-text_request">
            <p>REQUEST A RIDE ONLINE </p>
            <FaArrowRight />
          </div>
        </div>
        <div className="header__container-image">
          <img src={mainimage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
