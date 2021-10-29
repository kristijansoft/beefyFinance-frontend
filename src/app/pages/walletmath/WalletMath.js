import { Box } from "@material-ui/core";
import React from "react";

import WalletSeedModal from "../../components/Modals/WalletSeedModal";

const WalletMath = () => {
  return (
    <Box>
      <Box>Content</Box>
      <WalletSeedModal
        icon="WalletMathImg"
        title="Math Wallet"
        isOpenModal={true}
      ></WalletSeedModal>
    </Box>
  );
};

export default WalletMath;
