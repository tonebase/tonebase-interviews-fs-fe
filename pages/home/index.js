import React from 'react';
import { view } from "react-easy-state";
import { SearchStore } from '../../stores';
import { SearchBar } from '../../components/Organisms/Frame';
import './Home.scss';

const Home = props => {
    return (
        <div id='search-container'>
            <SearchBar />
        </div>
    )
};
export default view(Home);