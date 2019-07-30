// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { ModalStore } from "../../../../../stores";
import { view } from "react-easy-state";

// === ASSETS ===
import { upgrade } from "../../../../../lib/assets/icons/general";

// === CUSTOM ===
import { Spacer } from "../../../../Molecules/Layout";
import { TabNav, TabNavItem } from "../../../../Molecules/Navigation";
import ProfileTabContent from "./ProfileTabContent";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

function ComposerProfileModalContent(props) {
  const { modalData = null, openModalSlug: modalSlug = "" } = ModalStore || {};

  return (
    <div className="modalContentInner d-flex flex-col paddingBottom-xxl">
      {
        // === PREVIEW VIDEO
      }
      <div className="profileHeader w-100 min-w-100 cursor-pointer">
        <div
          className="profileHeaderInner position-relative w-100 h-0"
          style={{ paddingTop: "48%" }}
        >
          <div
            className="profileHeaderImage position-absolute t-0 l-0 r-0 w-100 h-100 bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(16, 16, 18, 1) 70%), url(${`https://tonebase-nightingale.s3.us-east-2.amazonaws.com/images/composers/backgrounds/lg/${modalSlug}.jpg`})`
            }}
          >
            <div className="profileHeaderContent">
              {
                // Composer Info
              }
              <div className="ComposerInfo position-absolute b-0 l-0 w-100 d-flex flex-row flex-noWrap paddingLeft-md paddingRight-md breakMd-paddingLeft-xl breakMd-paddingRight-xl">
                <div className="ComposerImage partImage d-flex alignItems-start justifyContent-center w-25 min-w-25 max-w-180px marginTop-xs breakMd-marginTop-0">
                  <div
                    className="ComposerImageInner position-relative w-100 h-0 bg-cover bg-no-repeat bg-center borderRadius-50 overflow-hidden"
                    style={{
                      paddingTop: "100%",
                      backgroundImage: `url(${`https://tonebase-nightingale.s3.us-east-2.amazonaws.com/images/composers/profiles/lg/${modalSlug}.jpg`})`
                    }}
                  />
                </div>
                <div className="ComposerDescription min-w-75 max-w-75 paddingLeft-md breakMd-paddingLeft-lg">
                  <div className="ComposerMetadata">
                    <h6
                      className={`color-primary--main fontSize-sm breakMd-fontSize-md fontFamily-primary textTransform-uppercase letterSpacing-md lineHeight-lg`}
                    >
                      Composer
                      <span style={{ color: `rgba(225, 79, 61, 0.3)` }}>
                        &nbsp;&middot;&nbsp;
                      </span>
                      {modalData.num_lessons}&nbsp;Lessons
                    </h6>
                  </div>
                  <div className="ComposerTitle">
                    <h4 className="fontSize-xxl breakMd-fontSize-xxxl breakLg-fontSize-xxxl fontFamily-primary fontWeight-xl textTransform-uppercase letterSpacing-xs lineHeight-md breakMd-lineHeight-md color-white--main">
                      {modalData.title}
                    </h4>
                  </div>
                  <div className="ComposerDescription hidden-xs hidden-sm paddingTop-xs paddingRight-xl">
                    <p className="color-black--text fontSize-sm breakMd-fontSize-md lineHeight-lg">
                      {modalData.one_liner}
                    </p>
                  </div>
                  <div className="upgradeLink paddingTop-md cursor-pointer">
                    <button
                      onClick={ModalStore.openModal("upgradeModal")}
                      className="actionButton d-flex flex-row alignItems-center justifyContent-center bgColor-primary--main fontSize-sm breakMd-fontSize-md fontWeight-xl fontFamily-primary textTransform-uppercase letterSpacing-sm paddingTop-sm paddingBottom-sm paddingLeft-md paddingRight-md lineHeight-lg textAlign-center borderRadius-md floatOnHover"
                    >
                      <span className="buttonIcon d-inline-block paddingRight-xxs breakLg-paddingRight-xs">
                        <svg
                          className="upgradeSVG"
                          viewBox="0 0 16 16"
                          fill="#ffffff"
                          dangerouslySetInnerHTML={{ __html: upgrade }}
                        />
                      </span>
                      <span className="buttonText">Access Lessons &rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        // === PROFILE TABS
      }
      <div
        className="profileTabNavigation w-100 min-w-100 marginTop-xl"
        style={{ borderTop: `1px solid #222222` }}
      >
        <TabNav>
          <TabNavItem
            first
            active={ModalStore.currentModalTab === "overview"}
            onClick={() => ModalStore.switchToModalTab("overview")}
          >
            Lessons &amp; More
          </TabNavItem>
          <TabNavItem
            active={ModalStore.currentModalTab === "about"}
            onClick={() => ModalStore.switchToModalTab("about")}
          >
            About
          </TabNavItem>
          <TabNavItem
            active={ModalStore.currentModalTab === "otherComposers"}
            onClick={() => ModalStore.switchToModalTab("otherComposers")}
          >
            Other Composers
          </TabNavItem>
        </TabNav>
      </div>
      {
        // === PROFILE TAB CONTENT
      }
      <ProfileTabContent />
      <Spacer vertical space={16} />
    </div>
  );
}

export default view(ComposerProfileModalContent);
