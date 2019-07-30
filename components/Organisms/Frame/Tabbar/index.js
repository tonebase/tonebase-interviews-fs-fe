// ==============================
// ==============================
// ==============================
// IMPORTS
// ==============================

// === STORES ===
import { view } from "react-easy-state";

// === ASSETS ===
import {
  dashboard,
  library,
  auth,
  search,
  upgrade,
  menu
} from "../../../../lib/assets/icons";

// === CUSTOM ===
import TabbarItem from "./TabbarItem";

// ==============================
// ==============================
// ==============================
// COMPONENT
// ==============================

class Tabbar extends React.Component {
  render() {
    return (
      <div
        id="tabbar"
        className="tbFrame tabbar bgColor-black--dark d-flex b-0 l-0 r-0 w-100 flex-row alignItems-center justifyContent-spaceBetween hidden-md hidden-lg hidden-xl"
        style={{
          height: "60px",
          zIndex: 99,
          borderTop: `1px solid #1c1c1f`
        }}
      >
        <div className="tabbarInner position-relative d-flex flex-row w-100 h-100 alignItems-center alignContent-center justifyContent-spaceBetween">
          <TabbarItem SVGMarkup={dashboard} title="Home" />
          <TabbarItem SVGMarkup={library} title="Library" />
          <TabbarItem highlight SVGMarkup={auth} title="Login" />
          <TabbarItem SVGMarkup={search} title="Search" />
          <TabbarItem SVGMarkup={menu} title="Menu" />
        </div>
      </div>
    );
  }
}

export default view(Tabbar);
