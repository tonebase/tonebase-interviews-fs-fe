import { store, view, autoEffect } from 'react-easy-state';
import style from "./searchbar.scss";

export default function Searchbar() {

  const searchInput = store({ str: '', num: 0 });
  const enterTerm = e => {
    searchInput.str = e.target.value;
    if (e.target.value && !searchInput.num) searchInput.num = 1;
  };

  const clearInput = () => {
    // document.getElementById('search-input').value = '';
    // searchInput.str = '';
  };
  return (
    <>
      <form className="searchbar">
        <input id="search-input" type="text" onChange={(e) => enterTerm(e)} />
        {/* <input */}
        {/*   id="search-input" */}
        {/*   type="text" */}
        {/*   // value={searchInput.str} */}
        {/*   onKeyDown={e => enterTerm2(e)} */}
        {/* /> */}
        <button type="submit" className="fontSize-sm">
          Search
        </button>
      </form>
      <style jsx>{style}</style>
    </>
  );
}
