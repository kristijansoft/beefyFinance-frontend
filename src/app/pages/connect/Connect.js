import React, { useState } from "react";
import * as Modal from "react-modal";
import "./Connect.scss";

import WalletInjectedImg from "./../../../assets/images/wallets/injected.svg";
import WalletConnectImg from "./../../../assets/images/wallets/connect.svg";
import WalletBinanceImg from "./../../../assets/images/wallets/binance.png";
import WalletMathImg from "./../../../assets/images/wallets/math.svg";
import WalletTrustImg from "./../../../assets/images/wallets/trust.svg";
import WalletSafepalImg from "./../../../assets/images/wallets/safepal.svg";
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

const ConnectPage = () => {
  const [showModal, setShowModal] = useState(true);

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div className="page">
      <div className="page-container">
        <button onClick={handleOpenModal} className="bee-btn transparent">
          Trigger Modal
        </button>

        <Modal
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={handleCloseModal}
          shouldCloseOnOverlayClick={true}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              width: "100%",
              inset: "none",
            },
            content: {
              position: "absolute",
              top: "50%",
              right: "auto",
              bottom: "auto",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              border: "none",
              background: "#fff",
              WebkitOverflowScrolling: "touch",
              borderRadius: "4px",
              outline: "none",
              padding: "0",
              margin: "0",
              maxWidth: "800px",
              minWidth: "fit-content",
              overflow: "hidden",
              maxHeight: "100%",
              borderRadius: "12px",
            },
          }}
        >
          <div className="modal-content">
            <div className="wallets-wrapper">
              <Link to="/connect/WalletConnect">
                <div className="wallet-box">
                  <img src={WalletInjectedImg} alt="Wallet Injected" />
                  <p>Injected</p>
                  <span>Home-BrowserWallet</span>
                </div>
              </Link>
              <Link to="/connect/WalletConnect">
                <div className="wallet-box">
                  <img src={WalletConnectImg} alt="Wallet Connect" />
                  <p>WalletConnect</p>
                  <span>Scan with WalletConnect to connect</span>
                </div>
              </Link>
              <Link to="/connect/BinanceWallet">
                <div className="wallet-box">
                  <img src={WalletBinanceImg} alt="Wallet Binance" />
                  <p>Binance</p>
                  <span>Binance Chain Wallet</span>
                </div>
              </Link>
              <Link to="/connect/MathWallet">
                <div className="wallet-box">
                  <img src={WalletMathImg} alt="Wallet Math" />
                  <p>Math</p>
                  <span>Math Wallet</span>
                </div>
              </Link>
              <Link to="/connect/TrustConnect">
                <div className="wallet-box">
                  <img src={WalletTrustImg} alt="Wallet Trust" />
                  <p>Trust</p>
                  <span>Trust Wallet</span>
                </div>
              </Link>
              <Link to="/connect/SafepalConnect">
                <div className="wallet-box">
                  <img src={WalletSafepalImg} alt="Wallet Safepal" />
                  <p>SafePal</p>
                  <span>SafePal App</span>
                </div>
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ConnectPage;
