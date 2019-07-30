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
import ComposerImage from "./ComposerImage";
import ComposerText from "./ComposerText";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class ComposerCard extends React.Component {
  render() {
    return (
      <div
        className="contentItem __composer __regular w-100 paddingLeft-xs paddingRight-xs marginBottom-lg"
        onClick={ModalStore.openModal("composerProfileModal", {
          slug: this.props.slug
        })}
      >
        <div className="contentItemInner w-100 cursor-pointer">
          <ComposerImage {...this.props} />
          <Spacer vertical space={8} />
          <ComposerText {...this.props} />
        </div>
      </div>
    );
  }
}

export default view(ComposerCard);
