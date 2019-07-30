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
import ArtistImage from "./ArtistImage";
import ArtistText from "./ArtistText";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

class ArtistCard extends React.Component {
  render() {
    return (
      <div
        className="contentItem __artist __regular w-100 paddingLeft-xs paddingRight-xs marginBottom-lg"
        onClick={ModalStore.openModal("artistProfileModal", {
          slug: this.props.slug
        })}
      >
        <div className="contentItemInner w-100 cursor-pointer">
          <ArtistImage {...this.props} />
          <Spacer vertical space={8} />
          <ArtistText {...this.props} />
        </div>
      </div>
    );
  }
}

export default view(ArtistCard);
