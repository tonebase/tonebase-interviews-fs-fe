import React, { Fragment } from 'react'
import style from './SearchLoader.styles.scss';

// Renders gray placeholders based on placeholderCount - limit
const SearchLoader = ({ placeholderCount }) => (
  <Fragment>
    {Array.from({ length: placeholderCount }, (_, index) => (
      <li key={index} className='search__item' role='presentation'>
        <figure className='search__loader' role='presentation'/>
      </li>
    ))}

    <style jsx>{style}</style>
  </Fragment>
)

export default SearchLoader;
