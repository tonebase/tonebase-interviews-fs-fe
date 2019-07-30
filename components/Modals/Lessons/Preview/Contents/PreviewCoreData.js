// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { ModalStore } from "../../../../../stores";
import { view } from "react-easy-state";

// === HELPERS ===
import {
  getLessonDifficultyText,
  getLessonTypeText,
  getLessonTypeColorClass
} from "../../../../../lib/helpers/content/lessons";

// === CUSTOM ===

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class PreviewCoreData extends React.Component {
  render() {
    const modalData = ModalStore.modalData || null;
    const artistNameWithSpaces = ModalStore.modalData
      ? ModalStore.modalData.artist_slug.replace(/([A-Z]+)/g, " $1").trim()
      : null;

    return (
      <div className="previewCoreData w-100 min-w-100">
        <div className="previewCoreInner position-relative w-100 textAlign-center paddingLeft-lg paddingRight-lg">
          {
            // Attributes
          }
          <h6
            className={`${getLessonTypeColorClass(
              modalData.lesson_type
            )} fontSize-sm breakMd-fontSize-md fontFamily-primary textTransform-uppercase letterSpacing-md`}
          >
            {getLessonTypeText(modalData.lesson_type)}
            <span style={{ color: `rgba(225, 79, 61, 0.3)` }}>
              &nbsp;&middot;&nbsp;
            </span>
            {getLessonDifficultyText(modalData.difficulty)}
            <span style={{ color: `rgba(225, 79, 61, 0.3)` }}>
              &nbsp;&middot;&nbsp;
            </span>
            {modalData.total_length} Mins
          </h6>
          {
            // Title
          }
          <h3 className="max-w-420px breakMd-max-w-600px fontSize-xl breakMd-fontSize-xxxl breakLg-fontSize-xxxl fontFamily-primary fontWeight-xl textTransform-uppercase letterSpacing-xs lineHeight-lg breakMd-lineHeight-md color-white--main breakMd-paddingTop-sm breakMd-paddingBottom-xs marginLeft-auto marginRight-auto">
            Preview:&nbsp;
            {modalData.lesson_type === 0 && (
              <span>
                {artistNameWithSpaces} {modalData.title}
              </span>
            )}
            {modalData.lesson_type === 1 && (
              <span>
                {artistNameWithSpaces} teaches {modalData.title}
              </span>
            )}
            {modalData.lesson_type === 2 && <span>{modalData.title}</span>}
          </h3>
        </div>
      </div>
    );
  }
}

export default view(PreviewCoreData);
