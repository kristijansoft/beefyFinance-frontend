import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../components/Logo/Logo";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Logo />
      </div>
      <div className="nav">
        <ul className="nav__menu">
          <li>
            <a
              href="https://vote.beefy.finance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Vote</span>
            </a>
          </li>
          <li>
            <a
              href="https://dashboard.beefy.finance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Stats</span>
            </a>
          </li>
          <li>
            <a
              href="https://docs.beefy.finance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Docs</span>
            </a>
          </li>
          <li>
            <a
              href="https://app.1inch.io/#/r/0xF4cb25a1FF50E319c267b3E51CBeC2699FB2A43B"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Buy</span>
            </a>
          </li>
          <li>
            <Link to="/">
              <img
                alt="Boost"
                src="https://app.beefy.finance/static/media/boost.d4330994.svg"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="head-right">
        <button className="bee-btn transparent">En</button>
        <button className="bee-btn transparent">Wallet</button>
      </div>
    </header>
  );
};

export default Header;
