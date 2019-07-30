// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { view } from "react-easy-state";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class ComposerText extends React.Component {
  render() {
    const { hasLabel = true, hasTitle = true } = this.props;

    return (
      <div className="itemText __composer __regular w-100">
        <div className="itemTextInner w-100 position-relative textAlign-center">
          {
            // Item Metadata
          }
          {hasLabel && (
            <div className="itemMetadata w-100 paddingTop-xxs">
              <h6
                className={`color-primary--main fontSize-xxs breakLg-fontSize-xs breakXl-fontSize-sm fontFamily-primary textTransform-uppercase lineHeight-md letterSpacing-md`}
              >
                {this.props.content_type}
                <span style={{ color: `rgba(225, 79, 61, 0.3)` }}>
                  &nbsp;&middot;&nbsp;
                </span>
                {this.props.num_lessons} Lessons
              </h6>
            </div>
          )}
          {
            // Item title
          }
          {hasTitle && (
            <div className="itemTitle w-100 paddingTop-xxs">
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

export default view(ComposerText);
