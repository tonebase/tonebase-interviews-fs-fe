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
import style from "./MenuModal.scss";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class MenuModal extends React.Component {
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
    const modalName = "menuModal";
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
          id="menuModal"
          className={`menuModal tbModal position-fixed ${
            modalIsOpen ? "__shown" : ""
          }`}
          name={modalName}
        >
          <div className="modalContent smallModal bgColor-black--dark borderRadius-md">
            <ModalClose />
            Menu
          </div>
        </div>
        <style jsx>{ModalStyle}</style>
        <style jsx>{style}</style>
      </Fragment>
    );
  }
}

export default view(MenuModal);
