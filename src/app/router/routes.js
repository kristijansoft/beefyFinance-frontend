import React from 'react';
import loadable from '@loadable/component';

import Loader from '../pages/layouts/client/Loader';
import MetaMaskLoader from 'app/pages/layouts/loaders/MetaMaskLoader';

// function Loading(props) {
//   if (props.pastDelay) {
//     return <MetaMaskLoader />;
//   } else {
//     return null;
//   }
// }
function Loading(props) {
  if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return <div></div>;
  }
}

const routes = [
  {
    path: '/',
    key: 'home',
    exact: true,
    layout: 'client',
    component: loadable(() => import('../pages/home/Home'), {}),
  },
  {
    path: '/connect',
    key: 'connect',
    exact: true,
    layout: 'business',
    component: loadable(() => import('../pages/connect/Connect'), {}),
  },
  {
    path: '/connect/WalletConnect',
    key: 'WalletConnect',
    exact: true,
    layout: 'blank',
    component: loadable(
      () => import('../pages/walletconnect/WalletConnect'),
      {}
    ),
  },
  {
    path: '/connect/BinanceWallet',
    key: 'BinanceWallet',
    exact: true,
    layout: 'blank',
    component: loadable(
      () => import('../pages/walletbinance/WalletBinance'),
      {}
    ),
  },
  {
    path: '/connect/MathWallet',
    key: 'MathWallet',
    exact: true,
    layout: 'blank',
    component: loadable(() => import('../pages/walletmath/WalletMath'), {}),
  },
  {
    path: '/connect/SafepalConnect',
    key: 'SafepalConnect',
    exact: true,
    layout: 'blank',
    component: loadable(
      () => import('../pages/walletsafepal/WalletSafepal'),
      {}
    ),
  },
  {
    path: '/connect/TrustConnect',
    key: 'TrustConnect',
    exact: true,
    layout: 'blank',
    component: loadable(() => import('../pages/wallettrust/WalletTrust'), {}),
  },
  {
    path: '/connect/metamask',
    key: 'MetaMask',
    layout: 'blank',
    exact: true,
    component: loadable(
      () => import('../pages/walletmetamask/MetaMaskWin'),
      {}
    ),
  },
];

export default routes;
