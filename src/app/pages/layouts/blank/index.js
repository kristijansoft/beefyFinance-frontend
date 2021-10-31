import React from "react";

const BlankLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div>{children}</div>
    </React.Fragment>
  );
};

export default BlankLayout;
