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

class LessonMetadata extends React.Component {
  state = {
    longDescription: false
  };

  toggleDescriptionState = () => {
    this.setState({ longDescription: !this.state.longDescription });
  };

  render() {
    const modalData = ModalStore.modalData || null;
    const strippedDescription = ModalStore.modalData
      ? modalData.description.replace("<br><br>", "").replace("<br>", "")
      : null;

    return (
      <div className="previewMetadata w-100 max-w-100 breakMd-max-w-66 paddingTop-xs breakSm-paddingTop-sm breakMd-paddingTop-lg breakLg-paddingTop-xl">
        {
          // Description
        }
        <div className="previewDescription position-relative w-100 max-w-480px breakMd-max-w-none marginLeft-auto marginRight-auto paddingLeft-md breakMd-paddingLeft-0 paddingRight-md breakMd-paddingRight-xl cursor-pointer">
          <div className="previewDescriptionInner color-black--text fontSize-sm breakMd-fontSize-md lineHeight-xl">
            {this.state.longDescription ? (
              <div
                className="longDescription"
                onClick={this.toggleDescriptionState}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: modalData.description
                  }}
                />
                <span className="fontSize-xs breakLg-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-md color-primary--main cursor-pointer">
                  &nbsp;Show Less
                </span>
              </div>
            ) : (
              <div
                className="shortDescription"
                onClick={this.toggleDescriptionState}
              >
                {strippedDescription.substring(0, 125)}
                <span className="hidden-xs hidden-sm">
                  {strippedDescription.substring(125, 160)}
                </span>
                <span className="hidden-xs hidden-sm hidden-md">
                  {strippedDescription.substring(160, 221)}
                </span>
                ...&nbsp;
                <span className="fontSize-xs breakLg-fontSize-sm fontFamily-primary textTransform-uppercase letterSpacing-md color-primary--main cursor-pointer">
                  Read More
                </span>
              </div>
            )}
          </div>
        </div>
        {
          // Social Buttons
        }
      </div>
    );
  }
}

export default view(LessonMetadata);
