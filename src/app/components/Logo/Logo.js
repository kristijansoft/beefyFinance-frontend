import React from "react";
import "./Logo.scss";
import LogoImg from "../../../assets/images/logo.svg";

const Logo = ({ notext }) => {
  return (
    <div className="logo-wrapper">
      <img src={LogoImg} alt="Beefy Finance" />
      {!notext && <a href="#">Beefy.Finance </a>}
    </div>
  );
};

export default Logo;
