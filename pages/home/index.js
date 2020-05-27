import React, { useEffect } from 'react';
import { view } from "react-easy-state";
import { SearchStore } from '../../stores';
import { SearchBar } from '../../components/Organisms/Frame';
import { NavBar } from '../../components/Organisms/Frame/NavBar';
import { withFrame } from '../../components/PageWrappers';

function Home() {
    useEffect(() => {
        SearchStore.getToken();
    })
    return (
        <div id='bodyWrapper' className='bodyWrapper'>
            <div id='pageBody' className='pageBody alignItems-center'>
                <div className='appWrapper'>
                    <h1>Google</h1>
                    <SearchBar className='search-input' />
                    <h2 className='paddingTop-md marginTop-xxl z-0'>Google, but for Spotify.</h2>
                </div>
            </div>
        </div>
    );
};
export default withFrame(view(Home));