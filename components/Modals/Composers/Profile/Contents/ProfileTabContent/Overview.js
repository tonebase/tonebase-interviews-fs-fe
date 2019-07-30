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

class Overview extends React.Component {
  render() {
    const { modalData = null, openModalSlug: modalSlug = "" } = ModalStore;

    return (
      <div className="profileTab moreLikeThis position-relative w-100 paddingLeft-md paddingRight-md breakMd-paddingLeft-lg breakMd-paddingRight-lg">
        <div
          className="profileSection marginBottom-lg breakMd-marginBottom-xl paddingBottom-lg"
          style={{ borderBottom: `1px solid #222222` }}
        >
          {
            // Composer Lessons
          }
          <SectionTitle size="small" title={`${modalSlug} Compositions`} />
          <SectionContentWithFetchedData
            dataURL={`/lessons/byComposer?slug=${modalSlug}`}
            wrapperClass="col col-xs-6 col-md-4"
            hasComposer={false}
          />
        </div>
        {modalData.num_courses > 1 && (
          <div
            className="profileSection marginBottom-lg breakMd-marginBottom-xl paddingBottom-lg"
            style={{ borderBottom: `1px solid #222222` }}
          >
            {
              // Composer Courses
            }
            <SectionTitle size="small" title="Featured Courses" />
            {/* <SectionContentWithFetchedData
                dataURL={`https://tonebase-api-staging.herokuapp.com/lessons/byComposer?slug=${ modalSlug}`}
                wrapperClass="col col-xs-6 col-md-4"
            /> */}
          </div>
        )}
        <div className="profileSection paddingBottom-lg">
          {
            // Composer Collections
          }
          <SectionTitle size="small" title="Featured Collections" />
          <SectionContentWithFetchedData
            dataURL={`/collections/byComposer?slug=${modalSlug}`}
            wrapperClass="col col-xs-6 col-md-3"
          />
        </div>
      </div>
    );
  }
}

export default view(Overview);
