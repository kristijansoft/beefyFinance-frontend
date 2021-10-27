import React from "react";

import ClientLayout from "./pages/layouts/client";

const AppLayout = ({ children }) => {
  return <ClientLayout>{children}</ClientLayout>;
};

export default AppLayout;
