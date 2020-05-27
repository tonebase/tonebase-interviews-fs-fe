import React, { useState, useEffect } from 'react';
import { view } from 'react-easy-state';
import SearchStore from '../../../../stores/SearchStore';
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
            SearchStore.searchResults = [];
        }
        console.log(SearchStore.active)
    }

    return (
        <form onSubmit={SearchStore.search} className='w-100'>
            <input
                className='noBorder marginTop-xxl paddingLeft-xl paddingTop-md paddingBottom-md d-flex bgColor-black--lighter color-primary--lighter min-w-420px  breakMd-min-w-540px'
                type='text'
                value={searchInput}
                onChange={handleSearchChange}
                style={{
                    border: 'none',
                    height: '42px',
                    borderRadius: '85px',
                    '&:hover': {
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.16)'
                    },
                    borderBottomLeftRadius: SearchStore.active ? '0' : '85px',
                    borderBottomRightRadius: SearchStore.active ? '0' : '85px',
                }
                }
            >
            </input>
        </form >
    )
}
export default view(SearchInput);