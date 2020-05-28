/* Import Store */
import { view } from 'react-easy-state';

/* SearchResult molecule: accepts props and renders a result with the given information */
function SearchResult(props) {
    return (
        <div className='result-item-wrapper z-3 w-100'>
            <div className=" w-100 h-100 d-inline-block">
                <a href={props.result.external_urls['spotify']}>
                    <div className='artist-name paddingLeft-xl d-flex'>
                        <h2 className='search-result color-primary--lighter paddingTop-xs paddingBottom-xs'>{props.result.name}</h2>
                        <h2 className='search-result fontSize-sm color-black--main paddingTop-xs paddingLeft-md paddingBottom-xs textTransform-capitalize'>{props.result.genres[0]}</h2>
                        <h2 className='search-result fontSize-sm color-black--main paddingTop-xs paddingLeft-sm paddingBottom-xs'>{props.result.followers.total.toLocaleString()} Followers</h2>
                    </div>
                </a>
            </div>
            {
                /* Custom CSS */
            }
            <style jsx>{`
            .artist-name:hover {
                cursor: pointer;
                background-color: rgb(100, 201, 100);
            }
        `}
            </style>
        </div>
    )

};
export default view(SearchResult);