import { Box } from "@material-ui/core";
import React from "react";

import WalletSeedModal from "../../components/Modals/WalletSeedModal";

const WalletConnect = () => {
  return (
    <Box>
      <Box>Content</Box>
      <WalletSeedModal
        icon="WalletConnectImg"
        title="Wallet Connect"
        isOpenModal={true}
      ></WalletSeedModal>
    </Box>
  );
};

export default WalletConnect;
