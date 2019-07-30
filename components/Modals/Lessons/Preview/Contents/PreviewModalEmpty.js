// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { ModalStore } from "../../../../../stores";
import { view } from "react-easy-state";

// === CUSTOM ===
import { Spacer } from "../../../../Molecules/Layout";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

function PreviewModalEmpty(props) {
  return (
    <div className="modalContentInner d-flex flex-col paddingBottom-xxl">
      {
        // === PREVIEW VIDEO
      }
      <div className="previewVideo w-100 min-w-100 cursor-pointer">
        <div
          className="previewVideoInner position-relative w-100 h-0"
          style={{ paddingTop: "56.25%" }}
        >
          <div className="previewVideoImage position-absolute t-0 l-0 r-0 w-100 h-100 blackAnimated" />
        </div>
      </div>
      {
        // === LESSON CORE DATA
      }
      <div className="previewCoreData w-100 min-w-100 marginTop-lg">
        <div className="previewCoreInner position-relative w-100 textAlign-center paddingLeft-lg paddingRight-lg">
          {
            // Attributes
          }
          <h6
            className="max-w-320px marginLeft-auto marginRight-auto fontSize-sm breakMd-fontSize-md fontFamily-primary textTransform-uppercase letterSpacing-md blackAnimated"
            style={{ height: "42px" }}
          />
          {
            // Title
          }
          <h3
            className="max-w-420px breakMd-max-w-600px blackAnimated fontSize-xl breakMd-fontSize-xxxl breakLg-fontSize-xxxl fontFamily-primary fontWeight-xl textTransform-uppercase letterSpacing-xs lineHeight-lg breakMd-lineHeight-md color-white--main paddingTop-xxs breakMd-paddingTop-md marginLeft-auto marginRight-auto marginTop-lg"
            style={{ height: "60px" }}
          />
        </div>
      </div>
      <div className="d-flex flex-row flex-wrapAll paddingLeft-md paddingRight-md breakMd-paddingLeft-xl breakMd-paddingRight-xl paddingTop-xs breakSm-paddingTop-sm breakMd-paddingTop-lg breakLg-paddingTop-xl">
        {
          // === LESSON METADATA
        }
        <div className="previewMetadata w-100 max-w-100 breakMd-max-w-66">
          {
            // Description
          }
          <div className="previewDescription position-relative w-100 max-w-480px breakMd-max-w-none marginLeft-auto marginRight-auto paddingLeft-md breakMd-paddingLeft-0 paddingRight-md breakMd-paddingRight-xl marginTop-md breakMd-marginTop-0">
            <div className="previewDescriptionInner color-black--text fontSize-sm breakMd-fontSize-md lineHeight-xl">
              <div
                className="descriptionEmpty w-100 blackAnimated"
                style={{
                  height: "110px"
                }}
              />
            </div>
          </div>
          {
            // Social Buttons
          }
        </div>
        {
          // === ACTION TRIGGERS
        }
        <div className="actionTriggers w-100 max-w-100 breakMd-max-w-33 textAlign-center">
          <div className="buttonWrapper max-w-320px position-relative marginLeft-auto marginRight-auto paddingTop-lg breakMd-paddingTop-0 breakLg-paddingLeft-xs">
            <div className="upgradeButton d-block w-100">
              <button className="actionButton d-flex flex-row alignItems-center justifyContent-center w-100 bgColor-primary--main fontSize-md fontWeight-xl fontFamily-primary textTransform-uppercase letterSpacing-sm paddingTop-sm paddingBottom-sm lineHeight-lg textAlign-center borderRadius-md floatOnHover">
                <span className="buttonText">Unlock All Lessons &rarr;</span>
              </button>
            </div>
            <Spacer vertical space={12} />
            <div className="singleLessonButton w-75 breakMd-w-100 breakLg-w-66 d-inline-block paddingRight-xs breakMd-paddingRight-0 breakLg-paddingRight-xs">
              <button className="actionButton d-flex flex-row alignItems-center justifyContent-center w-100 blackAnimated fontSize-md fontFamily-primary textTransform-uppercase letterSpacing-sm paddingTop-sm paddingBottom-sm lineHeight-lg textAlign-center borderRadius-md floatOnHover">
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
      </div>
      <Spacer vertical space={16} />
    </div>
  );
}

export default view(PreviewModalEmpty);
