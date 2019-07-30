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

// =============================
// =============================
// =============================
// COMPONENT
// =============================

function CollectionProfileModalEmpty(props) {
  return (
    <div className="modalContentEmpty d-flex flex-col paddingBottom-xxl">
      {
        // === PREVIEW VIDEO
      }
      <div className="profileHeader w-100 min-w-100 cursor-pointer">
        <div
          className="profileHeaderInner position-relative w-100 h-0"
          style={{ paddingTop: "48%" }}
        >
          <div className="profileHeaderImage position-absolute t-0 l-0 r-0 w-100 h-100 bg-cover bg-no-repeat bg-center blackAnimated">
            <div className="profileHeaderContent">
              {
                // Collection Info
              }
              <div className="collectionInfo position-absolute b-0 l-0 w-100 d-flex flex-row flex-noWrap paddingLeft-md paddingRight-md breakMd-paddingLeft-xl breakMd-paddingRight-xl paddingBottom-md">
                <div className="collectionImage partImage d-flex alignItems-start justifyContent-center w-25 min-w-25 max-w-180px marginTop-xs breakMd-marginTop-0">
                  <div
                    className="collectionImageInner position-relative w-100 h-0 bg-cover bg-no-repeat bg-center borderRadius-50 overflow-hidden blackAnimated pulseDark"
                    style={{
                      paddingTop: "132%"
                    }}
                  />
                </div>
                <div className="collectionDescription min-w-75 max-w-75 paddingLeft-md breakMd-paddingLeft-lg">
                  <div className="collectionMetadata">
                    <h6
                      className={`color-primary--main fontSize-sm breakMd-fontSize-md fontFamily-primary textTransform-uppercase letterSpacing-md lineHeight-lg w-100 max-w-420px blackAnimated pulseDark`}
                      style={{
                        height: "32px"
                      }}
                    />
                  </div>
                  <div className="collectionTitle marginTop-sm">
                    <h4
                      className="fontSize-xxl breakMd-fontSize-xxxl breakLg-fontSize-xxxl fontFamily-primary fontWeight-xl textTransform-uppercase letterSpacing-xs lineHeight-md breakMd-lineHeight-md color-white--main blackAnimated pulseDark"
                      style={{
                        height: "60px"
                      }}
                    />
                  </div>
                  <div className="upgradeLink paddingTop-md cursor-pointer">
                    <button
                      onClick={ModalStore.openModal("upgradeModal")}
                      className="actionButton d-flex flex-row alignItems-center justifyContent-center bgColor-primary--main fontSize-sm breakMd-fontSize-md fontWeight-xl fontFamily-primary textTransform-uppercase letterSpacing-sm paddingTop-sm paddingBottom-sm paddingLeft-md paddingRight-md lineHeight-lg textAlign-center borderRadius-md floatOnHover"
                    >
                      <span className="buttonText">Loading...</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default view(CollectionProfileModalEmpty);
