import React from 'react'
import style from "../../sass/main.scss";

const SearchForm = () => {
    return (
      <form className="search-form">
        <style jsx>{style}</style>
        
        <input
          type="text"
          className="search-form__input"
          placeholder="Search Google or type a url"
        />

        <div className="buttons">
          <button className="buttons__btn-1 btn">Google Search</button>
          <button className="buttons__btn-2 btn">I'm Feeling Lucky</button>
        </div>
      </form>
    );
}

export default SearchForm;