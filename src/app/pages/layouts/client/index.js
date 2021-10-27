import React from "react";
import Header from "./Header/Header";
import Background from "./Background/Background";

const ClientLayout = ({ children }) => {
  return (
    <React.Fragment>
      <React.Fragment>
        <Background />
      </React.Fragment>
      <Header />
      <div>{children}</div>
    </React.Fragment>
  );
};

export default ClientLayout;
