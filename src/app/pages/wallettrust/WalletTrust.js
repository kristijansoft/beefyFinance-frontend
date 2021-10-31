import { Box } from "@material-ui/core";
import React from "react";

import WalletSeedModal from "../../components/Modals/WalletSeedModal";
import { ReactComponent as WalletConnectIcon } from "assets/images/wallets/trust.svg";

const WalletTrust = () => {
  return (
    <Box>
      <Box>Content</Box>
      <WalletSeedModal
        icon={WalletConnectIcon}
        title="Trust Wallet"
        isOpenModal={true}
      ></WalletSeedModal>
    </Box>
  );
};

export default WalletTrust;
