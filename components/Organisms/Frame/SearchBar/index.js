import React, { useState, useEffect } from 'react';
import { view } from "react-easy-state";
import { SearchInput, SearchResult } from '../../../Molecules/Search'

import SearchStore from '../../../../stores/SearchStore';


function SearchBar(props) {
    const [active, setActive] = useState(false);
    const renderResults = () => {
        console.log(SearchStore.searchResults)
        SearchStore.searchResults.forEach((result, index) => {
            <li key={index}>{result.name}</li>
        })

    }
    const renderRecents = () => {
        console.log(active)
        if (SearchStore.recentSearches && !SearchStore.searchQuery.length) {
            SearchStore.recentSearches.map(search => {
                return <li>{search}</li>
            })
        }
    }
    const handleSearchClick = () => {
        setActive(!active)
    }
    return (
        <div>
            <SearchInput className='search-input' onClick={handleSearchClick} />
            {
                // Render Results if input is in focus and 
            }
            <div>
                {active &&
                    renderRecents()
                }
            </div>



            {
                // Render Search Results
            }
            <ul>
                {!SearchStore.searchResults.length & SearchStore.searchQuery.length > 3
                    ? <h1>We couldn't find any results.</h1>
                    : SearchStore.searchResults.map((result) => <SearchResult result={result} />)}
            </ul>

        </div >
    )
}
export default view(SearchBar);