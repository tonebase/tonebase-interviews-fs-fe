import { useRef } from "react";
import { store, view } from "react-easy-state";

import style from "./searchbar.scss";

function Searchbar() {
  const textInput = useRef(null);
  const searchInput = store({ str: "" });

  const enterTerm = (e) => {
    searchInput.str = e.target.value;
  };

  const clearInput = () => {
    document.getElementById("searchform__input").value = "";
    searchInput.str = "";
    textInput.current.focus();
  };

  return (
    <>
      <form className="searchform">
        <input
          name="q"
          id="searchform__input"
          className={`searchform__input`}
          type="text"
          ref={textInput}
          onChange={(e) => enterTerm(e)}
          tabIndex={1}
          autoFocus
        />

        <div className="searchform-buttons">
          <button
            type="button"
            className={`searchform__clear fontSize-sm ${
              searchInput.str ? "" : "searchform__clear--d-none"
            }`}
            onClick={clearInput}
            tabIndex={3}
          >
            X
          </button>
          <button
            type="submit"
            className="searchform__submit fontSize-sm"
            tabIndex={2}
          >
            Search
          </button>
        </div>
      </form>
      <style jsx>{style}</style>
    </>
  );
}

export default view(Searchbar);
