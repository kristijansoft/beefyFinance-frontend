import React, { useState } from "react";
import * as Modal from "react-modal";
import NewWindow from "react-new-window";

import "./Connect.scss";

import WalletInjectedImg from "./../../../assets/images/wallets/injected.svg";
import WalletConnectImg from "./../../../assets/images/wallets/connect.svg";
import WalletBinanceImg from "./../../../assets/images/wallets/binance.png";
import WalletMathImg from "./../../../assets/images/wallets/math.svg";
import WalletTrustImg from "./../../../assets/images/wallets/trust.svg";
import WalletSafepalImg from "./../../../assets/images/wallets/safepal.svg";
import WalletBinanceFillImg from "./../../../assets/images/BSC-fill.svg";

import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown/Dropdown";
import { FaFire } from "react-icons/fa";

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
            <p>
              <strong>{data.title}</strong>
            </p>
            <p>
              <span className="text-gray">Uses: {data.uses}</span>
            </p>
            <p>
              <Link to="/">
                <strong>Buy Token</strong>
              </Link>
            </p>
          </div>
        </div>
        <div className="wallet-stats">
          <ul>
            <li>
              <p>
                <strong>N/a</strong>
              </p>
              <span className="text-gray">Wallet</span>
            </li>
            <li>
              <p>
                <strong>N/a</strong>
              </p>
              <span className="text-gray">Deposited</span>
            </li>
            <li>
              <p>
                <strong>{data.apy}%</strong>
              </p>
              <span className="text-gray">APY</span>
            </li>
            <li>
              <p>
                <strong>{data.daily}%</strong>
              </p>
              <span className="text-gray">Daily</span>
            </li>
            <li>
              <p>
                <strong>${data.tvl}</strong>
              </p>
              <span className="text-gray">TVL</span>
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
  const [showMetaMask, setShowMetaMask] = useState(false);
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
  function openMetaMask() {
    setShowMetaMask(true);
  }

  const winFeatures = {
    width: "400",
  };

  return (
    <div className="page">
      <div className="page-container">
        <div className="content-wrapper-flex">
          <div className="network-select">
            <div className="network-select__left">
              <h2>Select Network</h2>
              <div className="select-wrapper">
                <div>
                  <img src={WalletBinanceFillImg} alt="Network" />
                </div>
                <div>
                  <strong>BSC</strong>
                </div>
              </div>
              <p>
                <strong>258 Vaults</strong>
              </p>
            </div>
            <div className="network-select__right">
              <h2>TVL $405.59M</h2>
              <h3>BIFI Buyback $0.00/day</h3>
              <h3>Deposited $7777</h3>
              <p>
                <span className="text-gray">
                  All vaults autocompound at an optional rate
                </span>
              </p>
            </div>
          </div>
          <div className="filter-section">
            <div className="filter-section__box filter-section__box__check">
              <div>
                <input type="checkbox" value="0" />
                <span>Hide Zero Balalnces</span>
              </div>
              <div>
                <input type="checkbox" value="0" />
                <span>Retired Vaults</span>
              </div>
              <div>
                <input type="checkbox" value="0" />
                <span>Deposited Vaults</span>
              </div>
              <div>
                <input type="checkbox" value="0" />
                <span>Boost</span> <FaFire />
              </div>
            </div>
            <div className="filter-section__box filter-section__box__list">
              <div>
                <span className="text-gray">Platform</span>
                <Dropdown list={listOfPlatform} />
              </div>
              <div>
                <span className="text-gray">Vault Type</span>
                <Dropdown list={listOfPlatform} />
              </div>
              <div>
                <span className="text-gray">Asset</span>
                <Dropdown list={listOfPlatform} />
              </div>
              <div>
                <span className="text-gray">Sort By</span>
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

        <Modal
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={handleCloseModal}
          shouldCloseOnOverlayClick={false}
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
              <Link to="#" onClick={openMetaMask}>
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
        {showMetaMask && (
          <NewWindow
            url="/connect/metamask"
            features={{ width: 400, height: 680, top: 400, left: 100 }}
          ></NewWindow>
        )}
      </div>
    </div>
  );
};

export default ConnectPage;
