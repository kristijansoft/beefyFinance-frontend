import { makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import { ReactComponent as MetaMaskImg } from 'assets/images/metamask.svg';
import './MetaMaskLoader.scss';

const MetaMaskLoader = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    show && (
      <div className="loader-container">
        <div className="metaicon-wrapper">
          <MetaMaskImg width="150" height="150" />
        </div>
        <div className="progress-bar">
          <div className="circle border"></div>
        </div>
      </div>
    )
  );
};

export default MetaMaskLoader;
