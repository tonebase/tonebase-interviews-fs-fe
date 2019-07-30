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
            // Artist Lessons
          }
          <SectionTitle size="small" title="Featured Lessons" />
          <SectionContentWithFetchedData
            dataURL={`/lessons/byArtist?slug=${modalSlug}`}
            wrapperClass="col col-xs-6 col-md-4"
            hasArtist={false}
          />
        </div>
        {modalData.num_courses > 1 && (
          <div
            className="profileSection marginBottom-lg breakMd-marginBottom-xl paddingBottom-lg"
            style={{ borderBottom: `1px solid #222222` }}
          >
            {
              // Artist Courses
            }
            <SectionTitle size="small" title="Featured Courses" />
            {/* <SectionContentWithFetchedData
                dataURL={`https://tonebase-api-staging.herokuapp.com/lessons/byArtist?slug=${ modalSlug}`}
                wrapperClass="col col-xs-6 col-md-4"
            /> */}
          </div>
        )}
        <div className="profileSection paddingBottom-lg">
          {
            // Artist Collections
          }
          <SectionTitle size="small" title="Featured Collections" />
          <SectionContentWithFetchedData
            dataURL={`/collections/byArtist?slug=${modalSlug}`}
            wrapperClass="col col-xs-6 col-md-3"
          />
        </div>
      </div>
    );
  }
}

export default view(Overview);
