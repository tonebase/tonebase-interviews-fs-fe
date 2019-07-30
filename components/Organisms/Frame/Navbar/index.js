// ==============================
// ==============================
// ==============================
// IMPORTS
// ==============================

// === STORES ===
import { view } from "react-easy-state";
import { ModalStore } from "../../../../stores";

// === ASSETS ===
import {
  logoFull,
  logoMark,
  upgrade,
  search
} from "../../../../lib/assets/icons";

// ==============================
// ==============================
// ==============================
// COMPONENT
// ==============================

class Navbar extends React.Component {
  render() {
    return (
      <div
        id="navbar"
        className="tbFrame navbar bgColor-black--dark d-flex t-0 l-0 r-0 w-100 flex-row alignItems-center justifyContent-spaceBetween"
        style={{
          zIndex: 99,
          borderBottom: `1px solid #1c1c1f`
        }}
      >
        <div className="navbarInner position-relative d-flex flex-row w-100 h-100 alignItems-center alignContent-center justifyContent-spaceBetween paddingLeft-sm paddingRight-sm breakMd-paddingLeft-md breakMd-paddingRight-md">
          {
            // === LOGO + TITLE
          }
          <div className="navItem logoTitle d-flex alignItems-center justifyContent-spaceBetween h-100 hidden-md hidden-lg hidden-xl">
            <div className="subItem logoWrapper d-flex h-100 alignItems-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 29 29"
                className="logoSVG"
                dangerouslySetInnerHTML={{ __html: logoMark }}
              />
            </div>
            <div className="subItem titleWrapper d-flex h-100 alignItems-center">
              <h6 className="color-white--main fontSize-xs fontFamily-primary textTransform-uppercase paddingLeft-xxs letterSpacing-sm lineHeight-md">
                Dashboard
              </h6>
            </div>
          </div>
          {
            // === LOGO FULL
          }
          <div className="navItem logoFull d-flex alignItems-center justifyContent-spaceBetween h-100 hidden-xs hidden-sm">
            <div className="subItem logoWrapper d-flex h-100 alignItems-center">
              <svg
                viewBox="0 0 120 25"
                className="logoSVG"
                dangerouslySetInnerHTML={{ __html: logoFull }}
              />
            </div>
          </div>
          {
            // === NAV SEARCH
          }
          <div className="navItem navSearch  d-flex alignItems-center justifyContent-spaceBetween h-100 hidden-xs hidden-sm">
            <div className="subItem navSearchWrapper d-flex alignItems-center">
              <label
                htmlFor="navSearch"
                className="hidden"
                style={{ opacity: 0, visibility: "hidden" }}
              >
                Search the library
              </label>
              <input
                type="text"
                name="navSearch"
                id="navSearch"
                className="navSearch h-100 min-w-240px breakMd-min-w-320px breakLg-min-w-420px fontSize-xs breakLg-fontSize-sm bgColor-smoke--main border-0 borderRadius-sm color-white--main paddingLeft-sm paddingRight-sm"
                placeholder="Search the library..."
                style={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  border: "1px solid #1c1c1f",
                  borderRight: 0
                }}
              />
              <div
                className="fakeSearchButton h-100 d-flex alignItems-center justifyContent-center h-100 bgColor-smoke--dark padding-sm borderRadius-sm cursor-pointer"
                style={{
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0
                }}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="rgba(255, 255, 255, 0.5)"
                  className="navbarSearchSVG"
                  dangerouslySetInnerHTML={{ __html: search }}
                />
              </div>
            </div>
          </div>
          {
            // === ACTION BUTTON
          }
          <div className="navItem actionTriggers d-flex alignItems-center justifyContent-spaceBetween h-100">
            <button
              onClick={ModalStore.openModal("upgradeModal")}
              className="actionButton d-flex flex-row alignItems-center justifyContent-center bgColor-primary--main fontSize-xs breakLg-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-sm paddingRight-xs paddingLeft-xs paddingTop-xxs paddingBottom-xxs lineHeight-lg textAlign-center borderRadius-sm floatOnHover"
            >
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
            <button
              className="actionButton d-flex flex-row alignItems-center justifyContent-center fontSize-xs breakLg-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-sm lineHeight-lg textAlign-center marginLeft-sm breakMd-marginLeft-md breakLg-marginLeft-lg"
              style={{ borderBottom: "1px solid #e14f3d" }}
            >
              <span className="buttonText">Login/Signup</span>
            </button>
          </div>
        </div>
        <style jsx>{`
          .navbar {
            height: 50px;
          }
          .upgradeSVG {
            width: 11px;
            height: 11px;
          }

          @media (min-width: 768px) {
            .navbar {
              padding-left: 80px;
            }

            .logoSVG {
              width: 105px;
              height: 22px;
            }

            .navSearchWrapper {
              height: 26px;
            }
            .navbarSearchSVG {
              width: 12px;
              height: 12px;
            }

            .searchText {
              color: #aaaaaa;
            }
            .searchText:hover {
              color: #dddddd;
            }
          }

          @media (min-width: 992px) {
            .navbar {
              height: 60px;
            }

            .logoSVG {
              width: 120px;
              height: 25px;
            }

            .navSearchWrapper {
              height: 32px;
            }
            .navbarSearchSVG {
              width: 14px;
              height: 14px;
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

export default view(Navbar);
