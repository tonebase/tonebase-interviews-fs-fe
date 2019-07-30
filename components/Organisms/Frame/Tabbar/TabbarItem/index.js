// ==============================
// ==============================
// ==============================
// IMPORTS
// ==============================

// === STORES ===
import { view } from "react-easy-state";

// ==============================
// ==============================
// ==============================
// COMPONENT
// ==============================
class TabbarItem extends React.Component {
  render() {
    // Determine render props.
    const itemWidth = this.props.highlight ? "21%" : "19.75%";
    const iconColor =
      this.props.active || this.props.highlight ? "#e14f3d" : "#555555";

    let itemBackground = "rgba(0,0,0,0)";
    if (this.props.active) itemBackground = "#111111";
    if (this.props.highlight) itemBackground = "#330101";

    let itemColor = "#aaaaaa";
    if (this.props.highlight) itemColor = "#ffffff";

    let itemHeight = "100%";
    if (this.props.highlight) itemHeight = "130%";

    let itemDisplay = "flex";
    if (this.props.hidden) itemDisplay = "none";

    return (
      <div
        className="tabbarItem flex-col alignItems-center justifyContent-center borderRadius-sm"
        style={{
          display: itemDisplay,
          width: itemWidth,
          minWidth: itemWidth,
          height: itemHeight,
          backgroundColor: itemBackground
        }}
      >
        <div className="tabbarIcon d-flex flex-row alignItems-center justifyContent-center">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill={iconColor}
            className="tabbarSVG"
            dangerouslySetInnerHTML={{ __html: this.props.SVGMarkup }}
          />
        </div>
        <div
          className={`tabbarText position-relative d-flex ${
            this.props.highlight
              ? "paddingTop-xs paddingBottom-xxs"
              : "paddingTop-xs"
          }`}
        >
          <h6
            className="fontSize-xs fontFamily-primary textTransform-uppercase letterSpacing-md lineHeight-md"
            style={{ color: itemColor }}
          >
            {this.props.title}
          </h6>
        </div>
      </div>
    );
  }
}

export default view(TabbarItem);
