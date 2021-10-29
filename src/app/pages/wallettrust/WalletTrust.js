import { Box } from "@material-ui/core";
import React from "react";

import WalletSeedModal from "../../components/Modals/WalletSeedModal";

const WalletTrust = () => {
  return (
    <Box>
      <Box>Content</Box>
      <WalletSeedModal
        icon="WalletTrustImg"
        title="Trust Wallet"
        isOpenModal={true}
      ></WalletSeedModal>
    </Box>
  );
};

export default WalletTrust;
