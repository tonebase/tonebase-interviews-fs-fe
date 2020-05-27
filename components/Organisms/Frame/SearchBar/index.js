import React, { useState, useEffect } from 'react';
import { view } from "react-easy-state";
import { SearchInput, SearchResult } from '../../../Molecules/Search'
import SearchStore from '../../../../stores/SearchStore';

function SearchBar() {
    const renderResults = () => {
        return (
            <div>
                <div className='color-black--lighter paddingBottom-xxs' style={{ borderTop: '2px solid #1c1c1f', margin: '0 20px 0 14px' }}></div>
                <div id='results-container' className='w-100 paddingBottom-xs textAlign-left' style={{ marginTop: '-5px', }}>
                    <div id='results-wrapper' className='w-100 position-absolute z-3 d-flex flex-col bgColor-black--lighter paddingBottom-xs' style={{ maxHeight: '450px', borderRadius: '0 0 24px 24px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.16)' }} >
                        <ul className='results-list'>
                            {SearchStore.searchResults.map((result) => <SearchResult result={result} />)}
                        </ul>

                    </div>
                </div >
            </div>
        );
    }
    return (
        <div className='search-wrapper '>
            <SearchInput />
            {SearchStore.searchResults.length ? renderResults() : <></>}
        </div >
    )
}
export default view(SearchBar);