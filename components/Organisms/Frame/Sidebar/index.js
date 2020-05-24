// ==============================
// ==============================
// ==============================
// IMPORTS
// ==============================

// === STORES ===
import { view } from "react-easy-state";

// === ASSETS ===
import {
  menu,
  auth,
  upgrade,
  dashboard,
  library,
  artists,
  lessons,
  courses,
  composers,
  collections,
  counter
} from "../../../../lib/assets/icons";

// === CUSTOM ===
import SidebarItem from "./SidebarItem";

// ==============================
// ==============================
// ==============================
// COMPONENT
// ==============================

class Sidebar extends React.Component {
  render() {
    return (
      <div
        id="sidebar"
        className="tbFrame sidebar bgColor-black--dark d-flex t-0 b-0 l-0 h-100 hidden-xs hidden-sm"
        style={{
          width: "80px",
          zIndex: 100,
          borderRight: `1px solid #1c1c1f`
        }}
      >
        <div className="sidebarInner position-relative w-100 h-100 d-flex flex-col alignItems-center justifyContent-start">
          <div
            className="mainMenu subItem w-100"
            style={{
              flex: 0,
              flexShrink: 0,
              borderBottom: `1px solid #222222`
            }}
          >
            <SidebarItem small SVGMarkup={menu} href="/menu" title="Menu" />
            <SidebarItem SVGMarkup={auth} title="Login" href="/login" />
            {/* <SidebarItem SVGMarkup={upgrade} title="Upgrade" /> */}
            <SidebarItem SVGMarkup={dashboard} title="Home" href="/home" />
            <SidebarItem active SVGMarkup={counter} title="Counter" href="/counter" />
            <SidebarItem
              SVGMarkup={library}
              title="Library"
              href="/library"
            />
          </div>
          <div className="subMenu subItem w-100" style={{ flex: 1 }}>
            <SidebarItem SVGMarkup={artists} title="Artists" href="/artists" />
            <SidebarItem SVGMarkup={lessons} title="Lessons" href="/lessons" />
            <SidebarItem SVGMarkup={courses} title="Courses" href="/courses" />
            <SidebarItem
              SVGMarkup={composers}
              title="Composers"
              href="/composers"
            />
            <SidebarItem
              SVGMarkup={collections}
              title="Collections"
              href="/collections"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default view(Sidebar);
