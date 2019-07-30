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
import { TabNav, TabNavItem } from "../../../../Molecules/Navigation";
import ProfileTabContent from "./ProfileTabContent";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

function CollectionProfileModalContent(props) {
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
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(16, 16, 18, 1) 70%), url(${`https://tonebase-nightingale.s3.us-east-2.amazonaws.com/images/collections/cards/lg/${modalSlug}.jpg`})`
            }}
          >
            <div className="profileHeaderContent">
              {
                // Collection Info
              }
              <div className="collectionInfo position-absolute b-0 l-0 w-100 d-flex flex-row flex-noWrap paddingLeft-md paddingRight-md breakMd-paddingLeft-xl breakMd-paddingRight-xl">
                <div className="collectionImage partImage d-flex alignItems-start justifyContent-center w-25 min-w-25 max-w-180px marginTop-xs breakMd-marginTop-0">
                  <div
                    className="collectionImageInner position-relative w-100 h-0 bg-cover bg-no-repeat bg-center borderRadius-md overflow-hidden"
                    style={{
                      paddingTop: "132%",
                      backgroundImage: `url(${`https://tonebase-nightingale.s3.us-east-2.amazonaws.com/images/collections/profiles/lg/${modalSlug}.jpg`})`
                    }}
                  />
                </div>
                <div className="collectionDescription min-w-75 max-w-75 paddingLeft-md breakMd-paddingLeft-lg">
                  <div className="collectionMetadata">
                    <h6
                      className={`${getLessonTypeColorClass(
                        modalData.collection_type
                      )} fontSize-xs breakMd-fontSize-md fontFamily-primary textTransform-uppercase lineHeight-lg letterSpacing-md`}
                    >
                      Collection
                      <span style={{ color: `rgba(225, 79, 61, 0.3)` }}>
                        &nbsp;&middot;&nbsp;
                      </span>
                      {getLessonTypeText(modalData.collection_type)}
                      <span style={{ color: `rgba(225, 79, 61, 0.3)` }}>
                        &nbsp;&middot;&nbsp;
                      </span>
                      {modalData.num_lessons}&nbsp;Lessons
                    </h6>
                  </div>
                  <div className="collectionTitle">
                    <h4 className="fontSize-xxl breakMd-fontSize-xxxl breakLg-fontSize-xxxl fontFamily-primary fontWeight-xl textTransform-uppercase letterSpacing-xs lineHeight-md breakMd-lineHeight-md color-white--main">
                      {modalData.title}
                    </h4>
                  </div>
                  <div className="collectionDescription hidden-xs hidden-sm paddingTop-xs paddingRight-xl">
                    <p className="color-black--text fontSize-sm breakMd-fontSize-md lineHeight-lg">
                      {modalData.description
                        .replace("<br/><br/>", " ")
                        .replace("<br /><br />", " ")
                        .replace("<br><br>", " ")
                        .replace("<br>", "")
                        .replace("<br/>", "")
                        .substring(0, 177) + "..."}
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
            active={ModalStore.currentModalTab === "inThisCollection"}
            onClick={() => ModalStore.switchToModalTab("inThisCollection")}
          >
            In This Collection
          </TabNavItem>
          <TabNavItem
            active={ModalStore.currentModalTab === "otherCollections"}
            onClick={() => ModalStore.switchToModalTab("otherCollections")}
          >
            Other Collections
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

export default view(CollectionProfileModalContent);
