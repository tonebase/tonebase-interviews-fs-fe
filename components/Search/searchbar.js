import { useRef } from "react";
import { store, view } from "react-easy-state";

import style from "./searchbar.scss";

function Searchbar() {
  // ref to text input
  const textInput = useRef(null);

  // store for text input for searchbar
  const searchInput = store({ str: "" });

  // update store with search input value
  const enterTerm = (e) => {
    searchInput.str = e.target.value;
  };

  // clear text input, reset state
  const clearInput = () => {
    document.getElementById("searchform__input").value = "";
    searchInput.str = "";
    textInput.current.focus();
  };

  // i thought it might be best to put 
  // this in as if it this were a real project
  // even if it doesn't do anything, or maybe not
  const handleSearch = async (e) => {
      // e.preventDefault();
      // imaginary fetch request
  }

  return (
    <>
      <form className="searchform" onSubmit={handleSearch}>
        <input
          name="q"
          id="searchform__input"
          className={`searchform__input`}
          size={1}
          type="text"
          ref={textInput}
          onChange={(e) => enterTerm(e)}
          placeholder="query here"
          tabIndex={1}
          autoFocus
        />

        <div className="searchform-buttons">
          <button
            type="button"
            className={`searchform__clear fontSize-sm ${
              searchInput.str ? "" : "searchform__clear--hidden"
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
            disabled={searchInput.str ? false : true}
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
