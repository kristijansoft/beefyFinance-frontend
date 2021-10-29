import { Box } from "@material-ui/core";
import React from "react";

import WalletSeedModal from "../../components/Modals/WalletSeedModal";

const WalletSafepal = () => {
  return (
    <Box>
      <Box>Content</Box>
      <WalletSeedModal
        icon="WalletSafepalImg"
        title="SafePal App"
        isOpenModal={true}
      ></WalletSeedModal>
    </Box>
  );
};

export default WalletSafepal;
