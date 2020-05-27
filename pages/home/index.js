import React, { useEffect } from 'react';
import { view } from "react-easy-state";
import { SearchStore } from '../../stores';
import { SearchBar } from '../../components/Organisms/Frame';
import { withFrame } from '../../components/PageWrappers';

function Home() {
    useEffect(() => {
        SearchStore.getToken();
    })
    return (
        <div id='bodyWrapper' className='bodyWrapper'>
            <div id='pageBody' className='pageBody'>
                <div className='appWrapper d-flex'>
                    <h1>Spoogle</h1>
                    <SearchBar className='search-input' />
                </div>
            </div>
        </div>


    );

};
export default withFrame(view(Home));