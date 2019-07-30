// ==============================
// ==============================
// ==============================
// IMPORTS
// ==============================

// === STORES ===
import { view } from "react-easy-state";

// === ASSETS ===
import { upgrade } from "../../../../lib/assets/icons";

// ==============================
// ==============================
// ==============================
// COMPONENT
// ==============================

class Bannerbar extends React.Component {
  render() {
    return (
      <div
        id="bannerbar"
        className="tbFrame bannerbar bgColor-black--darker d-flex l-0 r-0 w-100 flex-row alignItems-center justifyContent-spaceBetween"
        style={{
          zIndex: 99,
          borderTop: `1px solid #1c1c1f`,
          backgroundImage: "linear-gradient(to right, #000000, )"
        }}
      >
        <div className="bannerbarInner position-relative d-flex flex-row w-100 h-100 alignItems-center alignContent-center justifyContent-spaceBetween padding-sm breakMd-padding-md breakLg-padding-lg">
          <div className="textWrapper d-flex flex-col alignItems-start justifyContent-center lineHeight-md paddingBottom-sm breakMd-paddingBottom-0">
            <div className="labelWrapper paddingBottom-xxs paddingRight-md">
              <h6 className="fontFamily-primary fontSize-xs color-primary--main textTransform-uppercase letterSpacing-md">
                Preview Of tonebase
              </h6>
            </div>
            <div className="messageWrapper">
              <p className="fontSize-sm breakMd-fontSize-md color-black--text">
                Sign up to unlock three free lessons, yours from now till the
                internet ends!
              </p>
            </div>
          </div>
          <div className="actionTriggers min-w-25 d-flex alignItems-center justifyContent-end">
            <button className="actionButton d-flex flex-row alignItems-center justifyContent-center bgColor-primary--main fontSize-xs breakLg-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-sm paddingRight-xs breakMd-paddingRight-md paddingLeft-xs breakMd-paddingLeft-md paddingTop-xxs breakMd-paddingTop-xs paddingBottom-xxs breakMd-paddingBottom-xs lineHeight-lg textAlign-center borderRadius-sm floatOnHover">
              <span className="buttonIcon d-inline-block paddingRight-xxs breakLg-paddingRight-xs">
                <svg
                  className="upgradeSVG"
                  viewBox="0 0 16 16"
                  fill="#ffffff"
                  dangerouslySetInnerHTML={{ __html: upgrade }}
                />
              </span>
              <span className="buttonText">Go Premium</span>
            </button>
          </div>
        </div>
        <style jsx>{`
          .bannerbar {
            bottom: 60px;
          }
          .upgradeSVG {
            width: 11px;
            height: 11px;
          }

          @media (min-width: 992px) {
            .bannerbar {
              bottom: 0;
              padding-left: 80px;
            }
            .upgradeSVG {
              width: 13px;
              height: 13px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default view(Bannerbar);
