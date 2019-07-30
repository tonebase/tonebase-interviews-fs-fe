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

// === ASSETS ===
import { logoMark } from "../../../lib/assets/icons";

// === CUSTOM ===
import { ModalClose } from "../Contents";
import UpgradeOption from "./UpgradeOption";
// 1. Molecules
import { Spacer } from "../../Molecules/Layout";

// === STYLING ===
import ModalStyle from "../Modals.scss";
import style from "./UpgradeModal.scss";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class UpgradeModal extends React.Component {
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
    const modalName = "upgradeModal";
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
          id="upgradeModal"
          className={`upgradeModal tbModal position-fixed ${
            modalIsOpen ? "__shown" : ""
          }`}
          name={modalName}
        >
          <div className="modalContent smallModal bgColor-black--dark borderRadius-md padding-lg breakMd-padding-xl">
            <ModalClose />
            <div className="upgradeHeader position-relative w-100 breakMd-padding-sm">
              <div className="headerWrapper d-block w-100 min-w-100 textAlign-center">
                <div className="logoWrapper d-flex flex-row alignItems-center justifyContent-center">
                  <svg
                    className="logoSVG"
                    viewBox="0 0 29 29"
                    dangerouslySetInnerHTML={{ __html: logoMark }}
                  />
                  <span className="textWrapper">
                    <h6 className="hidden-xs hidden-sm fontFamily-primary fontSize-lg color-white--main textTransform-uppercase letterSpacing-xl lineHeight-md textAlign-left paddingLeft-xs">
                      Premium
                    </h6>
                  </span>
                </div>
                <div className="titleWrapper max-w-420px paddingTop-md paddingBottom-xs paddingRight-md marginLeft-auto marginRight-auto">
                  <h4 className="fontFamily-primary fontSize-xl breakSm-fontSize-xxl fontWeight-xl color-white--main textTransform-uppercase letterSpacing-xs lineHeight-md textAlign-center">
                    Get Unlimited Access To The tonebase Library
                  </h4>
                </div>
                <div className="messageWrapper max-w-420px paddingBottom-lg marginLeft-auto marginRight-auto">
                  <p className="fontSize-sm breakMd-fontSize-md lineHeight-lg color-black--text textAlign-center">
                    Get access to 200+ lessons, courses, feedback, and more
                    &mdash; all taught by the world's greatest guitarists.
                  </p>
                  <Spacer vertical space={16} />
                  <button
                    className="actionButton d-flex flex-row alignItems-center justifyContent-center fontSize-xs breakLg-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-sm lineHeight-lg textAlign-center marginLeft-auto marginRight-auto"
                    style={{ borderBottom: "1px solid #e14f3d" }}
                  >
                    <span className="buttonText">
                      Learn More About Premium &rarr;
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <Spacer vertical space={24} />
            <div className="upgradePlans">
              <UpgradeOption
                primary
                label="Premium Yearly"
                price="$11.66"
                duration="&nbsp;/&nbsp;Mo*"
                buttonText="Start Free Trial &rarr;"
                disclaimer="*90-day money-back guarantee. Recurring annual payment after
                7-day free trial. Billed as one payment."
              />
              <Spacer vertical space={24} />
              <UpgradeOption
                label="Premium Monthly"
                price="$18.95"
                duration="&nbsp;/&nbsp;Mo*"
                buttonText="Start Free Trial &rarr;"
                disclaimer="*90-day money-back guarantee. Recurring annual payment after
                7-day free trial. Cancel anytime."
              />
              <Spacer vertical space={24} />
              <UpgradeOption
                label="NEW &mdash; Lifetime!"
                price="$450"
                duration="&nbsp;/&nbsp;Once*"
                buttonText="Choose Option &rarr;"
                disclaimer="*90-day money-back guarantee. Billed just once, never renews. Retain access to all lessons for life."
              />
            </div>
          </div>
        </div>
        <style jsx>{ModalStyle}</style>
        <style jsx>{style}</style>
        <style jsx>{`
          .logoSVG {
            width: 64px;
            height: 64px;
          }

          @media (min-width: 768px) {
            .logoSVG {
              width: 32px;
              height: 32px;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default view(UpgradeModal);
