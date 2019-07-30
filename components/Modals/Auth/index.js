// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === CORE ===
import { Fragment } from "react";

// === STORES ===
import { ModalStore } from "../../../stores";
import { view } from "react-easy-state";

// === HELPERS ===
import { createBaseDataURL } from "../../../lib/helpers/data";

// === CUSTOM ===
import { ModalClose } from "../Contents";

// === STYLING ===
import ModalStyle from "../Modals.scss";
import style from "./AuthModal.scss";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class AuthModal extends React.Component {
  // =============================
  // =============================
  // =============================
  // NON-LIFECYCLE FUNCTIONS
  // =============================
  setErrorState = errorMessage => {
    ModalStore.modalError = errorMessage;
  };

  // =============================
  // =============================
  // =============================
  // LIFECYCLE FUNCTIONS
  // =============================
  render() {
    const modalName = "authModal";
    const modalIsOpen =
      ModalStore.modalIsOpen && ModalStore.openModalName === modalName;

    return (
      <Fragment>
        <div
          className={`modalToggle position-fixed ${
            modalIsOpen ? "__shown" : ""
          }`}
          onClick={ModalStore.closeModals}
        />
        <div
          id="authModal"
          className={`authModal tbModal position-fixed ${
            modalIsOpen ? "__shown" : ""
          }`}
          name={modalName}
        >
          <div className="modalContent smallModal bgColor-black--dark borderRadius-md">
            <ModalClose />
            Authentication
          </div>
        </div>
        <style jsx>{ModalStyle}</style>
        <style jsx>{style}</style>
      </Fragment>
    );
  }
}

export default view(AuthModal);
