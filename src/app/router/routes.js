import React from "react";
import loadable from "@loadable/component";
import Loader from "../pages/layouts/client/Loader";

const routes = [
  {
    path: "/",
    key: "home",
    exact: true,
    layout: "client",
    component: loadable(() => import("../pages/home/Home"), {
      fallback: <Loader />,
    }),
  },
  {
    path: "/connect",
    key: "connect",
    exact: true,
    layout: "business",
    component: loadable(() => import("../pages/connect/Connect"), {
      fallback: <Loader />,
    }),
  },
  {
    path: "/connect/WalletConnect",
    key: "WalletConnect",
    exact: true,
    layout: "business",
    component: loadable(() => import("../pages/walletconnect/WalletConnect"), {
      fallback: <Loader />,
    }),
  },
  {
    path: "/connect/BinanceWallet",
    key: "BinanceWallet",
    exact: true,
    layout: "business",
    component: loadable(() => import("../pages/walletbinance/WalletBinance"), {
      fallback: <Loader />,
    }),
  },
  {
    path: "/connect/MathWallet",
    key: "MathWallet",
    exact: true,
    layout: "business",
    component: loadable(() => import("../pages/walletmath/WalletMath"), {
      fallback: <Loader />,
    }),
  },
  {
    path: "/connect/SafepalConnect",
    key: "SafepalConnect",
    exact: true,
    layout: "business",
    component: loadable(() => import("../pages/walletsafepal/WalletSafepal"), {
      fallback: <Loader />,
    }),
  },
  {
    path: "/connect/TrustConnect",
    key: "TrustConnect",
    exact: true,
    layout: "business",
    component: loadable(() => import("../pages/wallettrust/WalletTrust"), {
      fallback: <Loader />,
    }),
  },
];

export default routes;
