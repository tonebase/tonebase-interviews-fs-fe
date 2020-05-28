/* Import useState */
import { useState } from 'react';

/* Import Store */
import { view } from 'react-easy-state';
import SearchStore from '../../../../stores/SearchStore';

/* ActiveInputString for condtional styled-jsx */
const activeInputString = ``

/* SearchInput molecule: contains input element to be used in Search Organism */
function SearchInput() {

    /* Hook and helper to process user input and update our store accordingly */
    const [searchInput, setSearchInput] = useState('');
    const handleSearchChange = (e) => {
        e.persist();
        setSearchInput(e.target.value);
        SearchStore.setSearchQuery(e.target.value);
        SearchStore.active = e.target.value.length;
        if (e.target.value.length) {
            SearchStore.search(e);
        }
    }

    /* Render our input element */
    return (
        <div>
            <input
                className='search-input noBorder marginTop-xxl paddingLeft-xl paddingTop-md paddingBottom-md d-flex bgColor-black--lighter color-primary--lighter min-w-420px  breakMd-min-w-540px'
                type='text'
                value={searchInput}
                onChange={handleSearchChange}
            >
            </input>
            {
                /* Custom CSS for input element */
            }
            <style jsx>{`
            .search-input{
                    border: none;
                    height: 50px;
                    border-radius: 85px;
                    border-bottom-left-radius: ${!SearchStore.active ? `85px` : `0`};
                    border-bottom-right-radius: ${!SearchStore.active ? `85px` : `0`};
            }
            .search-input:hover{
                        boxShadow: 0 2px 8px rgba(0, 0, 0, 0.16);
            }
         

        `}</style>
        </div>
    )
}
export default view(SearchInput);