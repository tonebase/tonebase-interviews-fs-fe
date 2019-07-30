// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { view } from "react-easy-state";
import { ModalStore } from "../../../../../stores";

// === CUSTOM ===
import { Spacer } from "../../../Layout";
import LessonImage from "./LessonImage";
import LessonText from "./LessonText";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class LessonCard extends React.Component {
  render() {
    return (
      <div
        className="contentItem __lesson __regular w-100 paddingLeft-xs paddingRight-xs marginBottom-lg"
        onClick={ModalStore.openModal("previewModal", {
          slug: this.props.slug
        })}
      >
        <div className="contentItemInner w-100 cursor-pointer">
          <LessonImage {...this.props} />
          <Spacer vertical space={8} />
          <LessonText {...this.props} />
        </div>
      </div>
    );
  }
}

export default view(LessonCard);
