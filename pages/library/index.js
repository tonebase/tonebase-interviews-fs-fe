// ==============================
// ==============================
// ==============================
// IMPORTS
// ==============================

// === CORE ===
import { Fragment } from "react";

// === STORES ===
import { ModalStore } from "../../stores";
import { view } from "react-easy-state";

// === PAGE WRAPPERS ===
import { withFrame } from "../../components/PageWrappers";

// === STYLING ===
import style from "./Library.scss";

// ==============================
// ==============================
// ==============================
// COMPONENT
// ==============================

class Library extends React.Component {
  state = {};

  componentDidMount = () => null;

  render() {
    return (
      <div
        id="appWrapper"
        className={`appWrapper ${ModalStore.modalIsOpen ? "__modalOpen" : ""}`}
      >
        Library
        <br />
        <br />
        <br />
        <a
          onClick={() =>
            ModalStore.toggleModal("previewModal", {
              slug: "ali-arango-teaches-fast-scales-technique-lesson"
            })
          }
        >
          Open Lesson Preview Modal
        </a>
      </div>
    );
  }
}

export default withFrame(view(Library));
