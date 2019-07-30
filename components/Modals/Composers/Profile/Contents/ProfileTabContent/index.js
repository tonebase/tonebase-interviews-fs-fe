// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { ModalStore } from "../../../../../../stores";
import { view } from "react-easy-state";

// === CUSTOM ===
import Overview from "./Overview";
import About from "./About";
import OtherComposers from "./OtherComposers";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class ProfileTabContent extends React.Component {
  render() {
    return (
      <div className="profileTabContent w-100 min-w-100 marginTop-xs">
        {
          // In This Lesson
        }
        {ModalStore.currentModalTab === "overview" && <Overview />}
        {ModalStore.currentModalTab === "about" && <About />}
        {ModalStore.currentModalTab === "otherComposers" && <OtherComposers />}
      </div>
    );
  }
}

export default view(ProfileTabContent);
