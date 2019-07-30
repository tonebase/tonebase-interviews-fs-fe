// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { ModalStore } from "../../../../../stores";
import { view } from "react-easy-state";

// === HELPERS ===
import {
  getLessonDifficultyText,
  getLessonTypeText,
  getLessonTypeColorClass
} from "../../../../../lib/helpers/content/lessons";

// === ASSETS ===
import { upgrade } from "../../../../../lib/assets/icons/general";

// === CUSTOM ===
import { Spacer } from "../../../../Molecules/Layout";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class PreviewActionTriggers extends React.Component {
  render() {
    const modalData = ModalStore.modalData || null;

    return (
      <div className="actionTriggers w-100 max-w-100 breakMd-max-w-33 textAlign-center">
        <div className="prompt hidden-xs hidden-sm">
          <h6
            className={`color-black--text fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-md`}
          >
            &mdash; Access the full lesson &mdash;
          </h6>
          <Spacer vertical space={8} />
        </div>
        <div className="buttonWrapper max-w-320px position-relative marginLeft-auto marginRight-auto paddingTop-lg breakMd-paddingTop-0 breakLg-paddingLeft-xs">
          <div className="upgradeButton d-block w-100">
            <button
              onClick={ModalStore.openModal("upgradeModal")}
              className="actionButton d-flex flex-row alignItems-center justifyContent-center w-100 bgColor-primary--main fontSize-md fontWeight-xl fontFamily-primary textTransform-uppercase letterSpacing-sm paddingTop-sm paddingBottom-sm lineHeight-lg textAlign-center borderRadius-md floatOnHover"
            >
              <span className="buttonIcon d-inline-block paddingRight-xxs breakLg-paddingRight-xs">
                <svg
                  className="upgradeSVG"
                  viewBox="0 0 16 16"
                  fill="#ffffff"
                  dangerouslySetInnerHTML={{ __html: upgrade }}
                />
              </span>
              <span className="buttonText">Go Premium &rarr;</span>
            </button>
          </div>
          <Spacer vertical space={12} />
          <div className="singleLessonButton w-75 breakMd-w-100 breakLg-w-66 d-inline-block paddingRight-xs breakMd-paddingRight-0 breakLg-paddingRight-xs">
            <button className="actionButton d-flex flex-row alignItems-center justifyContent-center w-100 bgColor-black--main fontSize-md fontFamily-primary textTransform-uppercase letterSpacing-sm paddingTop-sm paddingBottom-sm lineHeight-lg textAlign-center borderRadius-md floatOnHover">
              <span className="buttonText">Single Lesson</span>
            </button>
          </div>
          <div className="giftButton w-25 breakLg-w-33 d-inline-block hidden-md paddingLeft-xs">
            <button
              className="actionButton d-flex flex-row alignItems-center justifyContent-center w-100 fontSize-md fontFamily-primary textTransform-uppercase letterSpacing-sm paddingTop-sm paddingBottom-sm lineHeight-lg textAlign-center borderRadius-md"
              style={{ border: "1px solid #e14f3d" }}
            >
              <span className="buttonText">Gift</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default view(PreviewActionTriggers);
