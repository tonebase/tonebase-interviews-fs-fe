import React, { useCallback } from 'react';
import { withFrame } from '../components/PageWrappers';
import { SearchBox, SearchList } from '../components/Search';
import { useSearch } from '../hooks';

// Search result limit on "api"
const LIMIT = 5;

// Home/Search page component that uses a custom useSearch hook
const Homepage = () => {
  const [query, setQuery, results, isLoading] = useSearch({ limit: LIMIT });
  const handleChange = useCallback((event) => setQuery(event.target.value));

  return (
    <div className='appWrapper search'>
      <SearchBox onChangeCallback={handleChange} value={query} />
      <SearchList results={results} isLoading={isLoading} limit={LIMIT} />
    </div> 
  )
};

export default withFrame(Homepage);
