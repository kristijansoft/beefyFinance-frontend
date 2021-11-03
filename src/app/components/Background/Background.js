import React from 'react';
import './Background.scss';

const Background = ({ showCows = true }) => {
  return (
    <div className="plains unselectable">
      <div className="plain-left"></div>
      <div className="plain-center-bg"></div>
      <div className="plain-right"></div>
      <div className="plain-center-fg"></div>
      {showCows && (
        <div className="cows">
          <img
            className="cow"
            src="https://www.beefy.finance/img/beefy.svg"
            alt="cow"
          />
          <img
            className="cow"
            src="https://www.beefy.finance/img/beefy.svg"
            alt="cow"
          />
          <img
            className="cow"
            src="https://www.beefy.finance/img/beefy.svg"
            alt="cow"
          />
          <img
            className="cow"
            src="https://www.beefy.finance/img/beefy.svg"
            alt="cow"
          />
          <img
            className="cow"
            src="https://www.beefy.finance/img/beefy.svg"
            alt="cow"
          />
          <img
            className="cow"
            src="https://www.beefy.finance/img/beefy.svg"
            alt="cow"
          />
        </div>
      )}
    </div>
  );
};

export default Background;
