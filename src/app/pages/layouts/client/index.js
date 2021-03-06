import React from "react";
import Background from "../../../components/Background/Background";
import Header from "./Header/Header";

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
