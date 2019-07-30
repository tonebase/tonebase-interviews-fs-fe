// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { ModalStore } from "../../../../../../stores";
import { view } from "react-easy-state";

// === HELPERS ===
import {
  getLessonDifficultyText,
  getLessonTypeText,
  getLessonTypeColorClass
} from "../../../../../../lib/helpers/content/lessons";

// === CUSTOM ===
import {
  SectionTitle,
  SectionContentWithFetchedData
} from "../../../../../Molecules/Layout";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class OtherInstructors extends React.Component {
  render() {
    const { modalData = null, openModalSlug: modalSlug = "" } = ModalStore;

    return (
      <div className="profileTab moreLikeThis position-relative w-100 paddingLeft-md paddingRight-md breakMd-paddingLeft-lg breakMd-paddingRight-lg">
        {
          // Recommendations
        }
        <SectionContentWithFetchedData
          dataURL={`/composers?shuffle=true&limit=8`}
          excludeSlug={modalSlug}
          wrapperClass="col col-xs-6 col-sm-4 col-md-3"
        />
      </div>
    );
  }
}

export default view(OtherInstructors);
