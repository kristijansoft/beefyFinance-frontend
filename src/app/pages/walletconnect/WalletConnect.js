import { Box } from "@material-ui/core";
import React from "react";

import WalletSeedModal from "../../components/Modals/WalletSeedModal";
import { ReactComponent as WalletConnectIcon } from "assets/images/wallets/wallet.svg";

const WalletConnect = () => {
  return (
    <Box>
      <Box>Content</Box>
      <WalletSeedModal
        icon={WalletConnectIcon}
        title="Wallet Connect"
        isOpenModal={true}
      ></WalletSeedModal>
    </Box>
  );
};

export default WalletConnect;
