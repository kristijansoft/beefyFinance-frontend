import React from "react";
import useMatchRoutes from "./hooks/useMatchRoute";
import layouts from "./pages/layouts";
import PageNotFound from "./pages/_error/PageNotFound";

const AppLayout = ({ children }) => {
  const { matchedRoute } = useMatchRoutes();

  if (!matchedRoute) {
    return <PageNotFound fallbackurl="" />;
  }

  const Layout = layouts[matchedRoute["layout"]];
  return <Layout>{children}</Layout>;
};

export default AppLayout;
