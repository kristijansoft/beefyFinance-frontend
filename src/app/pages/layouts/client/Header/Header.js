import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../components/Logo/Logo';
import './Header.scss';

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
              href="https://www.reddit.com/r/BeefyFinanceBIFI/"
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
              href="https://twitter.com/beefyfinance?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
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
        <Link className="nav-btn" to="/connect">
          Launch App
        </Link>
      </nav>
    </header>
  );
};

export default Header;
