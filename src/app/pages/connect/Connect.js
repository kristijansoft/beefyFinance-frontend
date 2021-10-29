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
import Dropdown from "../../components/Dropdown/Dropdown";

Modal.setAppElement("#root");

const VaultItem = ({ data }) => {
  return (
    <div className="vault-widget">
      <div className="widget-container">
        <div className="main-info">
          <div>
            <img src={WalletBinanceImg} alt="Vault Icon" />
          </div>
          <div>
            <p>{data.title}</p>
            <p>{data.uses}</p>
            <p>
              <Link to="/">Buy Token</Link>
            </p>
          </div>
        </div>
        <div className="wallet-stats">
          <ul>
            <li>
              <p>N/a</p>Wallet
            </li>
            <li>
              <p>N/a</p>Deposited
            </li>
            <li>
              <p>{data.apy}%</p>APY
            </li>
            <li>
              <p>{data.daily}%</p>Daily
            </li>
            <li>
              <p>${data.tvl}</p>TVL
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const listOfPlatform = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "eth",
    label: "Etherium",
  },
];
const ConnectPage = () => {
  const [showModal, setShowModal] = useState(true);
  const vaults = [
    {
      title: "beltBTC",
      uses: "Belt",
      wallet: 240,
      deposited: 350,
      apy: 3.84,
      daily: 0.0103,
      tvl: 22.63,
    },
    {
      title: "beltBTC",
      uses: "Belt",
      wallet: 240,
      deposited: 350,
      apy: 3.84,
      daily: 0.0103,
      tvl: 22.63,
    },
    {
      title: "beltBTC",
      uses: "Belt",
      wallet: 240,
      deposited: 350,
      apy: 3.84,
      daily: 0.0103,
      tvl: 22.63,
    },
    {
      title: "beltBTC",
      uses: "Belt",
      wallet: 240,
      deposited: 350,
      apy: 3.84,
      daily: 0.0103,
      tvl: 22.63,
    },
  ];

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div className="page">
      <div className="page-container">
        <div className="content-wrapper-flex">
          <div className="sidebar">
            <div className="filter-box">
              <div>
                <strong>Platform</strong>
                <Dropdown list={listOfPlatform} />
              </div>
              <div>
                <strong>Vault Type</strong>
                <Dropdown list={listOfPlatform} />
              </div>
              <div>
                <strong>Asset</strong>
                <Dropdown list={listOfPlatform} />
              </div>
              <div>
                <strong>Sort By</strong>
                <Dropdown list={listOfPlatform} />
              </div>
            </div>
          </div>
          <div className="main-content">
            {vaults.map((vault) => (
              <VaultItem data={vault}></VaultItem>
            ))}
          </div>
        </div>
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
