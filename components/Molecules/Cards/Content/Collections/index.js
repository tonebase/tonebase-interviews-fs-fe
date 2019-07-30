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
import CollectionImage from "./CollectionImage";
import CollectionText from "./CollectionText";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class CollectionCard extends React.Component {
  render() {
    return (
      <div
        className="contentItem __Collection __regular w-100 paddingLeft-xs paddingRight-xs marginBottom-lg"
        onClick={ModalStore.openModal("collectionProfileModal", {
          slug: this.props.slug
        })}
      >
        <div className="contentItemInner w-100 cursor-pointer">
          <CollectionImage {...this.props} />
          <Spacer vertical space={8} />
          <CollectionText {...this.props} />
        </div>
      </div>
    );
  }
}

export default view(CollectionCard);
