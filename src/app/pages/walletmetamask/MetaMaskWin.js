import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MetaMaskImg from "assets/images/metamask.svg";
import MetaMaskFullImg from "./../../../assets/images/metamask-logo-horizontal.svg";
import "./MetaMaskWin.scss";
import { FaChevronDown } from "react-icons/fa";

const MetaMaskWin = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [walletSeedInput, setWalletSeedInput] = useState("");

  const SpinLoader = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShow(!show);
    }, 2000);
  };

  function handleChange(e) {
    setWalletSeedInput(e.target.value);
  }

  return (
    <Box>
      <Box>{show && <SpinLoader />}</Box>
      {!show && (
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
                    <div className="icon-wrapper">
                      <FaChevronDown size={12} />
                    </div>
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
                    value={walletSeedInput}
                    onChange={handleChange}
                    placeholder="Separate each word with a single space"
                  ></textarea>
                </div>
                <button
                  className={`btn-proceed ${
                    walletSeedInput.split(" ").length == 12 ? "activeB" : ""
                  }`}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
};

export default MetaMaskWin;
