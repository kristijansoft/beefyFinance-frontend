import { Box } from "@material-ui/core";
import React from "react";

import WalletSeedModal from "../../components/Modals/WalletSeedModal";
import { ReactComponent as WalletConnectIcon } from "assets/images/wallets/math.svg";

const WalletMath = () => {
  return (
    <Box>
      <Box>Content</Box>
      <WalletSeedModal
        icon={WalletConnectIcon}
        title="Math Wallet"
        isOpenModal={true}
      ></WalletSeedModal>
    </Box>
  );
};

export default WalletMath;
