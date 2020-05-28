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
  menu,
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
        className="tbFrame navbar bgColor-black--main d-flex t-0 l-0 r-0 w-100 flex-row alignItems-center justifyContent-spaceBetween"
        style={{
          paddingLeft: '20px',
          zIndex: 99,
          borderBottom: `1px solid #1c1c1f`
        }}
      >
        <div className="position-relative d-flex flex-row w-100 h-100 alignItems-center alignContent-center justifyContent-spaceBetween paddingLeft-sm paddingRight-sm">
          {
            // === LOGO + TITLE
          }
          <div className="navItem d-flex alignItems-center justifyContent-spaceBetween hidden-md hidden-lg hidden-xl">
            <svg
              className="menuSVG"
              viewBox="0 0 16 16"
              fill="#ffffff"
              dangerouslySetInnerHTML={{ __html: menu }}
            />

          </div>
          {
            // === LOGO FULL
          }
          <div className="navItem d-flex alignItems-center justifyContent-spaceBetween h-100 hidden-xs hidden-sm">
            <div className="d-flex h-100 alignItems-center justifyContent-spaceBetween">
              <h2 className='fontWeight-lg'>About</h2>
              <h2 className='paddingLeft-xl fontWeight-lg'>Store</h2>
            </div>
          </div>


          {
            // === ACTION BUTTON
          }
          <div className="navItem actionTriggers d-flex alignItems-center justifyContent-spaceBetween h-100 marginTop-sm">
            <h2 className='fontWeight-lg'>Playlists</h2>
            <h2 className='paddingLeft-xl paddingRight-xl fontWeight-lg'>Podcasts</h2>
            <button
              className="actionButton d-flex flex-row alignItems-center justifyContent-center fontSize-md fontWeight-lg breakLg-fontSize-sm letterSpacing-sm paddingRight-xs paddingLeft-xs paddingTop-xxs paddingBottom-xxs lineHeight-lg  borderRadius-sm"
            >

              <span className="buttonText">Sign up</span>
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
          .menuSVG{
            fill: rgb(100, 201, 100);
            width: 40px;
            height: 35px;
            margin-top:25px;
            margin-left:-10px;

          }
          .actionButton{
            background-color:rgb(100, 201, 100);
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
