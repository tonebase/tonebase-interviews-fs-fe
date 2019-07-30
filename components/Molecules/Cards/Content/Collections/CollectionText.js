// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { view } from "react-easy-state";

// === HELPERS ===
import {
  getLessonDifficultyText,
  getLessonTypeText,
  getLessonTypeColorClass
} from "../../../../../lib/helpers/content/lessons";
import { addSpacesBetweenCapitalLetters } from "../../../../../lib/helpers/strings";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class LessonText extends React.Component {
  render() {
    const { hasLabel = true, hasTitle = true, hasArtist = true } = this.props;

    return (
      <div className="itemText __lesson __regular w-100">
        <div className="itemTextInner w-100 position-relative">
          {
            // Item Metadata
          }
          {hasLabel && (
            <div className="itemMetadata w-100">
              <h6
                className={`${getLessonTypeColorClass(
                  this.props.collection_type
                )} fontSize-xxs breakLg-fontSize-xs breakXl-fontSize-sm fontFamily-primary textTransform-uppercase lineHeight-md letterSpacing-md`}
              >
                Collection
                <span style={{ color: `rgba(225, 79, 61, 0.3)` }}>
                  &nbsp;&middot;&nbsp;
                </span>
                {getLessonTypeText(this.props.collection_type)}
              </h6>
            </div>
          )}
          {
            // Item title
          }
          {hasTitle && (
            <div className="itemTitle w-100 paddingTop-xxs breakMd-paddingRight-md">
              <h4 className="fontSize-md breakMd-fontSize-lg breakLg-fontSize-xl fontFamily-primary textTransform-uppercase letterSpacing-sm lineHeight-md color-white--main">
                {this.props.title}
              </h4>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default view(LessonText);
