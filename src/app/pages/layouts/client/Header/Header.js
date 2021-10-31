import React from "react";
import Logo from "../../../../components/Logo/Logo";
import "./Header.scss";

const Header = () => {
  return (
    <header className="client-header">
      <div className="logo">
        <Logo />
      </div>
      <nav className="nav">
        <ul className="nav__menu">
          <li>
            <a
              className="nav__menu-item"
              href="https://www.reddit.com/r/Beefy/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="nav-img"
                alt="Public Link"
                src="https://www.beefy.finance/img/reddit.svg"
              />
            </a>
          </li>
          <li>
            <a
              className="nav__menu-item"
              href="https://twitter.com/beefyfinance"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="nav-img"
                alt="Public Link"
                src="https://www.beefy.finance/img/twitter.svg"
              />
            </a>
          </li>
          <li>
            <a
              className="nav__menu-item"
              href="https://www.youtube.com/c/BeefyFinance"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="nav-img"
                alt="Public Link"
                src="https://www.beefy.finance/img/youtube.png"
              />
            </a>
          </li>
          <li>
            <a
              className="nav__menu-item"
              href="https://medium.com/beefyfinance"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="nav-img"
                alt="Public Link"
                src="https://www.beefy.finance/img/medium.svg"
              />
            </a>
          </li>
          <li>
            <a
              className="nav__menu-item"
              href="https://discord.gg/yq8wfHd"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="nav-img"
                alt="Public Link"
                src="https://www.beefy.finance/img/discord.svg"
              />
            </a>
          </li>
          <li>
            <a
              className="nav__menu-item"
              href="https://t.me/beefyfinance"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="nav-img"
                alt="Public Link"
                src="https://www.beefy.finance/img/telegram.svg"
              />
            </a>
          </li>
          <li>
            <a
              className="nav__menu-item"
              href="https://github.com/beefyfinance"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="nav-img"
                alt="Public Link"
                src="https://www.beefy.finance/img/github.svg"
              />
            </a>
          </li>
          <li>
            <a
              className="nav__menu-item"
              href="https://docs.beefy.finance"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="nav-img"
                alt="Public Link"
                src="https://www.beefy.finance/img/gitbook.svg"
              />
            </a>
          </li>
        </ul>
        <a className="nav-btn" href="#">
          Launch App
        </a>
      </nav>
    </header>
  );
};

export default Header;
