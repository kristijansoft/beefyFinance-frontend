import React from 'react';
import Background from '../../../components/Background/Background';
import Header from './Header/Header';

const BusinessLayout = ({ children }) => {
  return (
    <React.Fragment>
      {/* <React.Fragment>
        <Background showCows={false} />
      </React.Fragment> */}
      <Header />
      <div>{children}</div>
    </React.Fragment>
  );
};

export default BusinessLayout;
