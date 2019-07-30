// =============================
// =============================
// =============================
// IMPORTS
// =============================

// === STORES ===
import { ModalStore } from "../../../../../stores";
import { view } from "react-easy-state";

// === ASSETS ===
import { upgrade } from "../../../../../lib/assets/icons/general";

// === CUSTOM ===
import { Spacer } from "../../../../Molecules/Layout";

// =============================
// =============================
// =============================
// COMPONENT
// =============================

function ArtistProfileModalEmpty(props) {
  return (
    <div className="modalContentInner d-flex flex-col paddingBottom-xxl">
      Empty
    </div>
  );
}

export default view(ArtistProfileModalEmpty);
