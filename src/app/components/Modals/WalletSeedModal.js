import React, { useState } from "react";
import * as Modal from "react-modal";

import "./WalletSeedModal.scss";

Modal.setAppElement("#root");

const WalletSeedModal = ({ isOpenModal, icon: Icon, title }) => {
  const [showModal, setShowModal] = useState(isOpenModal);

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <Modal
      isOpen={showModal}
      contentLabel="Seed Phrase"
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 1)",
          width: "100%",
          inset: "none",
        },
        content: {
          position: "absolute",
          top: "50%",
          right: "auto",
          bottom: "auto",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "32em",
          border: "none",
          background: "#fff",
          WebkitOverflowScrolling: "touch",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
          margin: "0",
          maxWidth: "32em",
          overflow: "hidden",
          maxHeight: "100%",
          borderRadius: "12px",
        },
      }}
    >
      <div className="modal-content wallet-seed-modal">
        <div className="modal-content__title">Access via Seed Phrase</div>
        <div className="modal-content__subtitle">
          <Icon width="40" height="40" />
          <p>{title}</p>
        </div>

        <form>
          <p className="modal-form-title">
            Please provide your 12/24 word seed passphrase or privatekey in
            lowercase to recover and get access to your funds.
          </p>
          <textarea name="PrivateKey" id="PrivateKey"></textarea>
          <button className="modal-form-btn">Continue</button>
        </form>
      </div>
    </Modal>
  );
};

export default WalletSeedModal;
