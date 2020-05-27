import React, { useState, useEffect } from 'react';
import { view, store } from 'react-easy-state';
import SearchStore from '../../../../stores/SearchStore';
import { search } from '../../../../lib/assets/icons/general';


function SearchInput() {
    const [searchInput, setSearchInput] = useState('');
    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
        SearchStore.setSearchQuery(e.target.value);
    }
    useEffect(() => {
        SearchStore.getToken();
    })
    return (
        <div tabindex="0" class='search-wrapper d-flex'>
            <div class='search-input-wrapper flex-wrapAll d-flex w-100'>
                <form onSubmit={SearchStore.search} className='w-100'>
                    <input
                        className='search-input paddingLeft-xs d-flex bgColor-transparent w-100'
                        type='text'
                        value={searchInput}
                        onChange={handleSearchChange}
                        onClick={SearchStore.preview}
                    >

                    </input>
                </form>
            </div>
        </div>
    )
}
export default view(SearchInput);