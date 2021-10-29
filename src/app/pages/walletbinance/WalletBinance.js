import { Box } from "@material-ui/core";
import React from "react";

import WalletSeedModal from "../../components/Modals/WalletSeedModal";

const WalletBinance = () => {
  return (
    <Box>
      <Box>Content</Box>
      <WalletSeedModal
        icon="WalletBinanceImg"
        title="Binance Chain Wallet"
        isOpenModal={true}
      ></WalletSeedModal>
    </Box>
  );
};

export default WalletBinance;
