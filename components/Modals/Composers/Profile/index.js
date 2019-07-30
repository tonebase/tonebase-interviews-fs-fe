// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === CORE ===
import { Fragment } from "react";

// === STORES ===
import { ModalStore } from "../../../../stores";
import { view } from "react-easy-state";

// === HELPERS ===
import { createBaseDataURL } from "../../../../lib/helpers/data";

// === CUSTOM ===
import { ModalClose } from "../../Contents";
import {
  ComposerProfileModalContent,
  ComposerProfileModalEmpty
} from "./Contents";

// === STYLING ===
import ModalStyle from "../../Modals.scss";
import style from "./ComposerProfileModal.scss";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class ComposerProfileModal extends React.Component {
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
  static async getDerivedStateFromProps(props, state) {
    // === Load The Data (if we don't have it already)
    if (
      ModalStore.modalIsOpen &&
      ModalStore.openModalName === "composerProfileModal" &&
      !ModalStore.modalData
    ) {
      console.log("... No modal data, fetching");
      if (ModalStore.openModalSlug) {
        const dataURL =
          createBaseDataURL() +
          `/composers/profile?slug=${ModalStore.openModalSlug}`;
        console.log("... Data URL =>", dataURL);

        await ModalStore.getModalData(dataURL);
      } else {
        console.log(
          "... Something went wrong, there was no modalData but could not find a valid slug."
        );
        ModalStore.modalError =
          "Something went wrong passing the slug of this composer. Please contact us with the name of this composer at team@tonebase.co";
      }

      // === Toggle to the right TabNav
      ModalStore.switchToModalTab("overview");

      // === Run The Analytics
      console.log("... Running Composer profile modal analytics");
    }

    return null;
  }

  // =============================
  // =============================
  // =============================
  // LIFECYCLE FUNCTIONS
  // =============================
  render() {
    const modalName = "composerProfileModal";
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
          id="ComposerProfileModal"
          className={`ComposerProfileModal tbModal position-fixed ${
            modalIsOpen ? "__shown" : ""
          }`}
          name={modalName}
        >
          <div className="modalContent mediumModal bgColor-black--dark borderRadius-md">
            {
              // === MODAL CLOSE
            }
            <ModalClose />
            {
              // === CONTENTSß
            }
            {/* {ModalStore.modalData ? (
              <ComposerProfileModalContent />
              ) : (
              <ComposerProfileModalEmpty />
            )} */}
            {modalIsOpen && ModalStore.modalData ? (
              <ComposerProfileModalContent />
            ) : (
              <ComposerProfileModalEmpty />
            )}
          </div>
        </div>
        <style jsx>{ModalStyle}</style>
        <style jsx>{style}</style>
      </Fragment>
    );
  }
}

export default view(ComposerProfileModal);
