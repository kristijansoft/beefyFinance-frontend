import { Box } from "@material-ui/core";
import React from "react";
import MetaMaskImg from "assets/images/metamask.svg";
import MetaMaskFullImg from "./../../../assets/images/metamask-logo-horizontal.svg";
import "./MetaMaskWin.scss";

const MetaMaskWin = () => {
  return (
    <Box>
      <div className="metamask-window">
        <div className="app-header">
          <div className="app-header__contents">
            <div className="app-header__logo-container">
              <img src={MetaMaskImg} alt="Metamask" />
              <img src={MetaMaskFullImg} alt="Metamask" />
            </div>
            <div className="app-header__account-menu-container">
              <div className="network-component-wrapper">
                <div className="network-indicator">
                  <div className="menu-icon-circle">
                    <div></div>
                  </div>
                  <div className="network-name">Ethererum MainNet</div>
                  <div>icon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="view-wrapper">
            <div className="import-account">
              <h3>Continue with Seed Phrase</h3>
              <p>
                <span>
                  Enter your keyword phrase of 12 words to continue using
                  MetaMask.
                </span>
              </p>
              <div className="input-wrapper">
                <label htmlFor="wallet-seed">Wallet Seed</label>
                <textarea
                  name="wallet-seed"
                  id="wallet-seed"
                  placeholder="Separate each word with a single space"
                ></textarea>
              </div>
              <button className="btn-proceed">Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default MetaMaskWin;
