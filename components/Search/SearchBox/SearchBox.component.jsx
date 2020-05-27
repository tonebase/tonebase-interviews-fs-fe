import React, { Fragment } from 'react'
import style from './SearchBox.styles.scss';

const SearchBox = ({ onChangeCallback, value }) => (
  <Fragment>
    <label className='search__label' htmlFor='searchInput'>
      "SEARCH"
      <input 
        id='searchInput' 
        className='search__input' 
        type='search' 
        role='combobox' 
        aria-owns="search-list" 
        aria-label='search text' 
        onChange={onChangeCallback} 
        value={value} 
        autoFocus={true} />
    </label>

    <style jsx>{style}</style>
  </Fragment>
);

export default SearchBox;
