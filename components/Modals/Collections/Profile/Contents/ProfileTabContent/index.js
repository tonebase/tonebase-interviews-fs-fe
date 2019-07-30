// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { ModalStore } from "../../../../../../stores";
import { view } from "react-easy-state";

// === CUSTOM ===
import InThisCollection from "./InThisCollection";
import OtherCollections from "./OtherCollections";

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
          // In This Collection
        }
        {ModalStore.currentModalTab === "inThisCollection" && (
          <InThisCollection />
        )}
        {ModalStore.currentModalTab === "otherCollections" && (
          <OtherCollections />
        )}
      </div>
    );
  }
}

export default view(ProfileTabContent);
