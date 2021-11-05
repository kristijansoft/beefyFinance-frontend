import React from 'react';

import { ReactComponent as MetaMaskImg } from 'assets/images/metamask.svg';
import './MetaMaskLoader.scss';

const MetaMaskLoader = () => {
  return (
    <div className="loader-container">
      <div className="metaicon-wrapper">
        <MetaMaskImg width="150" height="150" />
      </div>
      <div className="progress-bar">
        <div className="circle border"></div>
      </div>
    </div>
  );
};

export default MetaMaskLoader;
