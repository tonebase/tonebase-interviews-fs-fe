/* Import Store */
import { view } from "react-easy-state";
import SearchStore from '../../../../stores/SearchStore';

/* Import Molecules */
import { SearchInput, SearchResult } from '../../../Molecules/Search'

/* Component */
function SearchBar() {

    /* Helper to render SearchResult molecules */
    const renderResults = () => {
        return (
            <div>
                {
                    // Result Container that wraps around SearchResult molecule renders 
                }
                <div id='result-break' className='result-break color-black--lighter paddingBottom-xxs'></div>
                <div id='results-container' className='results-container w-100 textAlign-left'>
                    <div id='results-wrapper' className='results-wrapper w-100 position-absolute z-3 d-flex flex-col bgColor-black--lighter paddingBottom-xs'>
                        <ul className='results-list p-0'>
                            {SearchStore.searchResults.map((result) => <SearchResult result={result} />)}
                        </ul>

                    </div>
                </div >
                {
                    // Custom CSS for result container.
                }
                <style jsx>{`
                    .result-break{
                        border-top: 2px solid #1c1c1f;
                        margin: 0 20px 0 14px;
                    }
                    .results-container{
                        margin-top:-5px;
                    }
                    .results-wrapper{
                        padding-bottom:0;
                        max-height:325px;
                        border-radius:0 0 24px 24px;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.16);
                    }
                `}
                </style>
            </div>
        );
    }
    return (
        /* Search Wrapper around SearchInput molecule */
        <div className='search-wrapper'>
            <SearchInput />
            {SearchStore.searchResults.length ? renderResults() : <></>}
        </div >
    )
}
export default view(SearchBar);