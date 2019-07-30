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
                  this.props.lesson_type
                )} fontSize-xxs breakLg-fontSize-xs breakXl-fontSize-sm fontFamily-primary textTransform-uppercase lineHeight-md letterSpacing-md`}
              >
                {getLessonTypeText(this.props.lesson_type)}
                <span style={{ color: `rgba(225, 79, 61, 0.3)` }}>
                  &nbsp;&middot;&nbsp;
                </span>
                {getLessonDifficultyText(this.props.difficulty)}
              </h6>
            </div>
          )}
          {
            // Item title
          }
          {hasTitle && (
            <div className="itemTitle w-100 paddingTop-xxs breakMd-paddingTop-xs breakMd-paddingRight-xs breakXl-paddingRight-xl">
              <h4 className="fontSize-md breakMd-fontSize-lg breakLg-fontSize-xl fontFamily-primary textTransform-uppercase letterSpacing-sm lineHeight-md color-white--main">
                {this.props.title}
              </h4>
            </div>
          )}
          {
            // Item Artist
          }
          {hasArtist && (
            <div className="itemArtist w-100 paddingTop-lg">
              <div className="itemArtistWrapper w-100 d-flex flex-row alignItems-center justifyContent-start">
                <div className="artistImage d-flex alignItems-center justifyContent-center max-w-24px borderRadius-50 overflow-hidden">
                  <img
                    className="w-100 h-100"
                    src={`https://tonebase-nightingale.s3.us-east-2.amazonaws.com/images/artists/profiles/lg/${
                      this.props.artist_slug
                    }.jpg`}
                    alt={this.props.artist_slug}
                  />
                </div>
                <div className="artistName paddingLeft-xxs breakMd-paddingLeft-xs">
                  <h6 className="fontSize-xxs breakMd-fontSize-xs breakLg-fontSize-sm lineHeight-md letterSpacing-xs color-black--text">
                    By {addSpacesBetweenCapitalLetters(this.props.artist_slug)}
                  </h6>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default view(LessonText);
