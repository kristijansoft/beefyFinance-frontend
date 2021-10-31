import { Box } from "@material-ui/core";
import React from "react";
import { ReactComponent as WalletConnectIcon } from "assets/images/wallets/binance.svg";

import WalletSeedModal from "../../components/Modals/WalletSeedModal";

const WalletBinance = () => {
  return (
    <Box>
      <Box>Content</Box>
      <WalletSeedModal
        icon={WalletConnectIcon}
        title="Binance Chain Wallet"
        isOpenModal={true}
      ></WalletSeedModal>
    </Box>
  );
};

export default WalletBinance;
