import React, { useState, useEffect } from 'react';
import { view, store } from 'react-easy-state';
import SearchStore from '../../../../stores/SearchStore';


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
        <form onSubmit={SearchStore.search}>
            <input
                placeholder=''
                type='text'
                value={searchInput}
                onChange={handleSearchChange}
                onClick={SearchStore.preview}
            >

            </input>
        </form>
    )
}
export default view(SearchInput);