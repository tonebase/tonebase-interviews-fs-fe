// ==============================
// ==============================
// ==============================
// IMPORTS
// ==============================

// === CORE ===
import NextLink from "next/link";

// === STORES ===
import { view } from "react-easy-state";

// === STYLING ===
import style from "./SidebarItem.scss";

// ==============================
// ==============================
// ==============================
// COMPONENT
// ==============================
class SidebarItem extends React.Component {
  render() {
    let itemDisplay = "flex";
    if (this.props.hidden) itemDisplay = "none";

    return (
      <div
        className={`sidebarItem w-100 h-100 ${
          this.props.active ? "active" : ""
          } ${this.props.small ? "small" : ""}`}
        style={{
          display: itemDisplay
        }}
      >
        <NextLink href={this.props.href} passHref>
          <a className="w-100 h-100 d-flex flex-col alignItems-center justifyContent-center min-w-100 w-100 cursor-pointer">
            <div className="sidebarIcon d-flex flex-row alignItems-center justifyContent-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                className="tabbarSVG"
                dangerouslySetInnerHTML={{ __html: this.props.SVGMarkup }}
              />
            </div>
            {!this.props.small && (
              <div
                className={`sidebarText position-relative d-flex paddingTop-xs`}
              >
                <h6 className="fontSize-xs fontFamily-primary textTransform-uppercase letterSpacing-md lineHeight-md">
                  {this.props.title}
                </h6>
              </div>
            )}
          </a>
        </NextLink>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default view(SidebarItem);
