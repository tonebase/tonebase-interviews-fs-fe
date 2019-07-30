// ==============================
// ==============================
// ==============================
// IMPORTS
// ==============================

// === CORE ===
import Router, { withRouter } from "next/router";

// === STORES ===
import { view } from "react-easy-state";

// === MODALS ===
import { PreviewModal } from "../../Modals";

// === STYLING ===
import GlobalStyling from "./Global.scss";

// ==============================
// ==============================
// ==============================
// COMPONENT
// ==============================

function withFrame(Component, config = {}) {
  class AppWithFrame extends React.Component {
    componentDidMount = () => null;

    componentDidUpdate = () => null;

    static getInitialProps = async ctx => {
      if (Component.getInitialProps) {
        return await Component.getInitialProps(ctx);
      }
      return {};
    };

    render() {
      return (
        <div id="globalWrapper" className="globalWrapper">
          {
            // === BASE COMPONENT
          }
          <Component {...this.props} />
          {
            // === STYLINH
          }
          <style jsx global>
            {GlobalStyling}
          </style>
        </div>
      );
    }
  }

  return withRouter(view(AppWithFrame));
}

export default withFrame;
