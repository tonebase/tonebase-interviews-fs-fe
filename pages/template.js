// ==============================
// ==============================
// ==============================
// IMPORTS
// ==============================

// === CORE ===
import { Fragment } from "react";

// === STORES ===
import { view } from "react-easy-state";

// === PAGE WRAPPERS ===
import { withFrame } from "../../components/PageWrappers";

// === STYLING ===
import style from "./Template.scss";

// ==============================
// ==============================
// ==============================
// COMPONENT
// ==============================

class Frame extends React.Component {
  render() {
    return (
      <div>
        Template
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default withFrame(view(Frame));
