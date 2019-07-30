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
import { PreviewModalContent, PreviewModalEmpty } from "./Contents";

// === STYLING ===
import ModalStyle from "../../Modals.scss";
import style from "./PreviewModal.scss";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class LessonPreviewModal extends React.Component {
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
      ModalStore.openModalName === "previewModal" &&
      !ModalStore.modalData
    ) {
      console.log("... No modal data, fetching");
      if (ModalStore.openModalSlug) {
        const dataURL =
          createBaseDataURL() +
          `/lessons/preview?slug=${ModalStore.openModalSlug}`;
        console.log("... Data URL =>", dataURL);

        await ModalStore.getModalData(dataURL);
      } else {
        console.log(
          "... Something went wrong, there was no modalData but could not find a valid slug."
        );
        ModalStore.modalError =
          "Something went wrong passing the slug of this lesson. Please contact us with the name of this lesson at team@tonebase.co";
      }

      // === Toggle to the right TabNav
      ModalStore.switchToModalTab("inThisLesson");

      // === Run The Analytics
      console.log("... Running preview modal analytics");
    }

    return null;
  }

  // =============================
  // =============================
  // =============================
  // LIFECYCLE FUNCTIONS
  // =============================
  render() {
    const modalName = "previewModal";
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
          id="previewModal"
          className={`previewModal tbModal position-fixed ${
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
            {modalIsOpen && ModalStore.modalData ? (
              <PreviewModalContent />
            ) : (
              <PreviewModalEmpty />
            )}
          </div>
        </div>
        <style jsx>{ModalStyle}</style>
        <style jsx>{style}</style>
      </Fragment>
    );
  }
}

export default view(LessonPreviewModal);
