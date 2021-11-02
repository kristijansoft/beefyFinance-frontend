import React, { useState } from 'react';
import * as Modal from 'react-modal';
import NewWindow from 'react-new-window';

import './Connect.scss';

import WalletInjectedImg from './../../../assets/images/wallets/injected.svg';
import WalletConnectImg from './../../../assets/images/wallets/connect.svg';
import WalletBinanceImg from './../../../assets/images/wallets/binance.png';
import WalletMathImg from './../../../assets/images/wallets/math.svg';
import WalletTrustImg from './../../../assets/images/wallets/trust.svg';
import WalletSafepalImg from './../../../assets/images/wallets/safepal.svg';
import WalletBinanceFillImg from './../../../assets/images/BSC-fill.svg';

import WalletBifiImg from 'assets/images/coins/bifi.png';
import WalletBTCImg from 'assets/images/coins/BTC.svg';
import WalletBananaImg from 'assets/images/coins/banana.svg';
import { Link } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
import { FaFire, FaInfoCircle } from 'react-icons/fa';
import FireImg from 'assets/images/fire.png';
import boostImg from 'assets/images/boost.svg';
import SpanLoader from 'app/components/SpanLoader/SpanLoader';

Modal.setAppElement('#root');

const VaultItem = ({ data, index = 0 }) => {
  return (
    <div className="vault-widget">
      {data.caption !== '' && <div className="caption">{data.caption}</div>}
      <div className="widget-container">
        <div className="main-info">
          <div className="main-info__icon">
            {index == 0 && <img src={WalletBifiImg} alt="Vault Icon" />}
            {index == 1 && <img src={WalletBTCImg} alt="Vault Icon" />}
            {index == 2 && <img src={WalletBananaImg} alt="Vault Icon" />}
          </div>
          <div className="main-info__detail">
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
            <div className="boost-action">
              <img src={boostImg} alt="Boost" />
              <span>
                <img src={FireImg} className="boost-fire-icon" alt="fire" />
              </span>
            </div>
          </div>
        </div>
        <div className="wallet-stats">
          <ul>
            <li>
              <p>
                <SpanLoader />
              </p>
              <span className="text-gray">Wallet</span>
            </li>
            <li>
              <p>
                <SpanLoader />
              </p>
              <span className="text-gray">Deposited</span>
            </li>
            <li>
              <div className="sale-price">
                <strong>{data.apySale}</strong>
              </div>
              <p className="original-price">
                <strong>{data.apy}%</strong>
              </p>
              <div className="text-gray info-icon-wrapped">
                <span>APY</span>
                <FaInfoCircle />
              </div>
            </li>
            <li>
              <div className="sale-price">
                <strong>{data.dailySale}</strong>
              </div>
              <p className="original-price">
                <strong>{data.daily}%</strong>
              </p>
              <div className="text-gray info-icon-wrapped">
                <span>Daily</span>
                <FaInfoCircle />
              </div>
            </li>
            <li>
              <p>
                <strong>${data.tvl}M</strong>
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
    id: 'all',
    label: 'All',
  },
  {
    id: 'eth',
    label: 'Etherium',
  },
];
const ConnectPage = () => {
  const [showModal, setShowModal] = useState(true);
  const [showMetaMask, setShowMetaMask] = useState(false);
  const vaults = [
    {
      title: 'BIFI Maxi',
      uses: 'Beefy.Finance',
      caption: '',
      wallet: null,
      deposited: null,
      apy: 7.53,
      apySale: '18.27%',
      daily: 0.02,
      dailySale: '0.05%',
      tvl: 37.62,
    },
    {
      title: 'beltBTC',
      uses: 'Belt',
      caption: 'Boosted by PlayMining',
      wallet: 240,
      deposited: 350,
      apy: 3.84,
      apySale: '17.73%',
      daily: 0.0094,
      dailySale: '0.0485%',
      tvl: 22.63,
    },
    {
      title: 'BANANA-BNB LP',
      uses: 'ApeSwap',
      caption: 'Boosted by CEEK',
      wallet: 240,
      deposited: 350,
      apy: 151.7,
      daily: 0.0103,
      tvl: 3.62,
    },
    {
      title: 'beltBTC',
      uses: 'Belt',
      caption: '',
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
    window.open('/connect/metamask', '', `width=400,height=680,left=300,top=0`);
  }

  const winFeatures = {
    width: '400',
  };

  return (
    <div className="page">
      <div className="page-container">
        <div className="content-wrapper-flex">
          <div className="connect-wallet-wrapper">
            <p>Wallet connection to BSC required.</p>
            <button className="bee-btn transparent btn-clear">
              Connect wallet
            </button>
          </div>
          {/* <div className="connect-smart">
            <p>
              Using Smart Contracts, Tokens, and Crypto is always a risk. DYOR
              before investing.
            </p>
          </div> */}
          <div className="network-select">
            <div className="network-select__left">
              <h2>Select Network</h2>
              <div className="select-wrapper">
                <div>
                  <img src={WalletBinanceFillImg} alt="Network" />
                </div>
                <div className="selected-network">
                  <div></div>
                  <strong>BSC</strong>
                </div>
              </div>
              <p>
                <strong>258 Vaults</strong>
              </p>
            </div>
            <div className="network-select__right">
              <h2>TVL $530.70M</h2>
              <h3>BIFI Buyback $7.32k/day</h3>
              <h3>
                <span>
                  Deposited <SpanLoader />
                </span>
              </h3>
              <p>
                <span className="text-gray">
                  All vaults autocompound at an optional rate
                </span>
              </p>
            </div>
          </div>
          <div className="filter-section">
            <div className="clear">
              <button className="bee-btn transparent btn-clear">
                Clear Filters
              </button>
            </div>
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
                <span>Boost</span>{' '}
                <img src={FireImg} className="fire-icon" alt="fire" />
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
            {vaults.map((vault, index) => (
              <VaultItem data={vault} index={index}></VaultItem>
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
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              width: '100%',
              inset: 'none',
            },
            content: {
              position: 'absolute',
              top: '50%',
              right: 'auto',
              bottom: 'auto',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              border: 'none',
              background: '#fff',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '0',
              margin: '0',
              maxWidth: '800px',
              minWidth: 'fit-content',
              overflow: 'hidden',
              maxHeight: '100%',
              borderRadius: '12px',
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
      </div>
    </div>
  );
};

export default ConnectPage;
