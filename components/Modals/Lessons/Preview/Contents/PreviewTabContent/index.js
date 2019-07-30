// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { ModalStore } from "../../../../../../stores";
import { view } from "react-easy-state";

// === CUSTOM ===
import InThisLesson from "./InThisLesson";
import YourInstructor from "./YourInstructor";
import WhatsIncluded from "./WhatsIncluded";
import MoreLikeThis from "./MoreLikeThis";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class PreviewTabContent extends React.Component {
  render() {
    return (
      <div className="previewTabContent w-100 min-w-100 marginTop-xs">
        {
          // In This Lesson
        }
        {ModalStore.currentModalTab === "inThisLesson" && <InThisLesson />}
        {ModalStore.currentModalTab === "yourInstructor" && <YourInstructor />}
        {ModalStore.currentModalTab === "whatsIncluded" && <WhatsIncluded />}
        {ModalStore.currentModalTab === "moreLikeThis" && <MoreLikeThis />}
      </div>
    );
  }
}

export default view(PreviewTabContent);
