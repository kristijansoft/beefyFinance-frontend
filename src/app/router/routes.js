import React from "react";
import loadable from "@loadable/component";
import Loader from "../pages/layouts/client/Loader";

const routes = [
  {
    path: "/",
    key: "home",
    exact: true,
    component: loadable(() => import("../pages/home"), {
      fallback: <Loader />,
    }),
  },
];

export default routes;
