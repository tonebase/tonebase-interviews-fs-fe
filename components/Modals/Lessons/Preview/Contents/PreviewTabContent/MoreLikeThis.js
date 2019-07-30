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

class MoreLikeThis extends React.Component {
  render() {
    const { modalData = null, openModalSlug: modalSlug = "" } = ModalStore;
    const artistNameWithSpaces = modalData
      ? modalData.artist_slug.replace(/([A-Z]+)/g, " $1").trim()
      : null;

    return (
      <div className="previewTab moreLikeThis position-relative w-100 paddingLeft-md paddingRight-md breakMd-paddingLeft-lg breakMd-paddingRight-lg">
        {
          // Recommendations
        }
        <SectionTitle size="small" title="Related Lessons" />
        <SectionContentWithFetchedData
          dataURL={`/lessons/recommendation?slug=${modalSlug}&shuffle=true&limit=12`}
          excludeSlug={modalSlug}
          wrapperClass="col col-xs-6 col-md-4"
        />
      </div>
    );
  }
}

export default view(MoreLikeThis);
