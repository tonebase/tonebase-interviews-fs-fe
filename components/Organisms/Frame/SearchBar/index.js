import React, { useState, useEffect } from 'react';
import { view } from "react-easy-state";
import { SearchInput, SearchResult } from '../../../Molecules/Search'

import SearchStore from '../../../../stores/SearchStore';
const activeWrapper = `active-search-wrapper d-flex bgColor-black--lighter borderColor-positive--main`;
const idleWrapper = 'search-wrapper d-flex bgColor-black--lighter borderColor-positive--main';


function SearchBar() {
    const renderResults = () => {
        return (
            <div>
                <div className='results-seperator color-black--lighter'></div>
                <div className='results-container'>
                    <div className='results-wrapper'>
                        <ul className='results-list'>
                            {SearchStore.searchResults.map((result) => <SearchResult result={result} />)}
                        </ul>

                    </div>
                </div >
            </div>
        );
    }
    return (
        <div className='search-wrapper'>
            <SearchInput className={!SearchStore.active ? 'search-input' : `active search-input`} />
            {SearchStore.searchResults.length ? renderResults() : <></>}
        </div >
    )
}
export default view(SearchBar);