// === STORES ===
import { ModalStore } from "../../../../stores";
import { view } from "react-easy-state";

// === STYLING ===
import style from "./ModalClose.scss";

function ModalClose(props) {
  return (
    <div
      className="modalClose position-absolute d-flex alignItems-center justifyContent-center color-black--darker fontWeight-xl"
      onClick={ModalStore.closeModals}
    >
      <span>X</span>
      <style jsx>{style}</style>
    </div>
  );
}

export default ModalClose;
