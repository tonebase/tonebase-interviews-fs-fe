import React, { Fragment } from 'react'
import style from './SearchItem.styles.scss';

const SearchItem = ({ result }) => (
  <Fragment>
    <li className='search__item' role='presentation'>
      <a className='search__link' href='#'>{result}</a>
    </li>
    
    <style jsx>{style}</style>
  </Fragment>
)

export default SearchItem;
