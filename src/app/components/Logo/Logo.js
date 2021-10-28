import React from "react";
import "./Logo.scss";
import LogoImg from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Logo = ({ notext }) => {
  return (
    <div className="logo-wrapper">
      <Link to="/">
        <img src={LogoImg} alt="Beefy Finance" />
        {!notext && <a href="#">Beefy.Finance </a>}
      </Link>
    </div>
  );
};

export default Logo;
