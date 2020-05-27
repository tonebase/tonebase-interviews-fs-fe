import React from 'react';
import { view } from 'react-easy-state';
function SearchResult(props) {
    return (
        <div className='pageContentItem fullWidthCard w-100'>
            <div className="cardInner cardVisualWrapper w-100 h-100 overflow-hidden">
                {props.result.name}
            </div>
        </div>
    )

};
export default view(SearchResult);