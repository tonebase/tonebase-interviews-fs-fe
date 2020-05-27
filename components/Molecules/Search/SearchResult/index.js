import React from 'react';
import { view } from 'react-easy-state';
function SearchResult(props) {
    return (
        <div className='pageContentItem fullWidthCard w-100'>
            <div className="cardInner cardVisualWrapper w-100 h-100 d-inline-block">
                <div className='artist-name paddingLeft-xl d-flex'>
                    <a href={props.result.external_urls['spotify']}>
                        <h2 className='search-result color-primary--lighter paddingTop-xs paddingBottom-xs'>{props.result.name}</h2>
                    </a>
                </div>
            </div>
        </div>
    )

};
export default view(SearchResult);