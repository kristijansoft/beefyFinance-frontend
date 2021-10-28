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
];

export default routes;
