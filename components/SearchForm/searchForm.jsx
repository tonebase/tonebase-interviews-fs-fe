import React, { useState } from 'react'
import style from "../../sass/main.scss";

const SearchForm = () => {
    const [searchQuery, setQuery] = useState("");
         
    return (
      <form className="home__content__form">
        <style jsx>{style}</style>
        <input
          type="text"
          className="home__content__form__search"
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