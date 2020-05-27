import React, { Fragment } from 'react'
import style from './SearchList.styles.scss';
import SearchLoader from '../SearchLoader'
import SearchItem from '../SearchItem'

const SearchList = ({ results, isLoading, limit }) => (
  <Fragment>
    <ul id='search-list' className='search__list' role='listbox' aria-expanded={!!results.length}>
      { isLoading ? (
          <SearchLoader placeholderCount={limit} />
      ) : (
        results.map((result, index) => (
          <SearchItem key={index} result={result} />
        ))
      )}
    </ul>
    
    <style jsx>{style}</style>
  </Fragment>
)

export default SearchList;
