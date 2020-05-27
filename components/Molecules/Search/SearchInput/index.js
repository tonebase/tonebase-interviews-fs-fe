import React, { useState, useEffect } from 'react';
import { view } from 'react-easy-state';
import SearchStore from '../../../../stores/SearchStore';
const activeInput = `active-search-input paddingLeft-xl paddingTop-md paddingBottom-md d-flex bgColor-black--lighter color-primary--lighter w-100`
const idleInput = `search-input paddingLeft-xl paddingTop-md paddingBottom-md d-flex bgColor-black--lighter color-primary--lighter w-100`

function SearchInput() {
    const [searchInput, setSearchInput] = useState('');
    const handleSearchChange = (e) => {
        e.persist();
        setSearchInput(e.target.value);
        SearchStore.setSearchQuery(e.target.value);
        if (e.target.value.length) {
            SearchStore.active = true;
            SearchStore.search(e);
        } else {
            SearchStore.active = false;
        }
        console.log(SearchStore.active)
    }

    return (
        <form onSubmit={SearchStore.search} className='w-100'>
            <input
                className={!SearchStore.active ? idleInput : activeInput}
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