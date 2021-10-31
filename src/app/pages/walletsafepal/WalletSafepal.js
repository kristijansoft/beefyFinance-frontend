import { Box } from "@material-ui/core";
import React from "react";

import WalletSeedModal from "../../components/Modals/WalletSeedModal";
import { ReactComponent as WalletConnectIcon } from "assets/images/wallets/safepal.svg";

const WalletSafepal = () => {
  return (
    <Box>
      <Box>Content</Box>
      <WalletSeedModal
        icon={WalletConnectIcon}
        title="SafePal App"
        isOpenModal={true}
      ></WalletSeedModal>
    </Box>
  );
};

export default WalletSafepal;
