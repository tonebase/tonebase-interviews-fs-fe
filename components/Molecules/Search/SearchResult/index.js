import React from 'react';
import { view } from 'react-easy-state';
function SearchResult(props) {
    return (
        <div className='pageContentItem z-3 fullWidthCard w-100'>
            <div className="cardInner cardVisualWrapper w-100 h-100 d-inline-block">
                <a href={props.result.external_urls['spotify']}>
                    <div className='artist-name paddingLeft-xl d-flex'>
                        <h2 className='search-result color-primary--lighter paddingTop-xs paddingBottom-xs'>{props.result.name}</h2>

                    </div>
                </a>
            </div>
        </div>
    )

};
export default view(SearchResult);