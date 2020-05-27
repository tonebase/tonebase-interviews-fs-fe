import React, { useState, useEffect } from 'react';
import { view } from "react-easy-state";
import { SearchInput } from '../../../Molecules/Search'
import SearchStore from '../../../../stores/SearchStore';


function SearchBar(props) {
    const renderResults = () => {
        console.log(SearchStore.searchResults)
        SearchStore.searchResults.forEach((result, index) => {
            <li key={index}>{result.name}</li>
        })

    }
    const renderRecents = () => {
        return (
            <ul>
                {SearchStore.recentSearches.map((recent, i) => {
                    return <li>
                        <h1>{recent}</h1>
                    </li>
                })}
            </ul>
        )
    }
    return (
        <div>
            <SearchInput />
            {SearchStore.searchQuery &&
                <div>
                    <h3>Searching for {SearchStore.searchQuery}</h3>
                </div>
            }
            <ul>
                {!SearchStore.searchResults.length
                    ? <h1>We couldn't find any results.</h1>
                    : SearchStore.searchResults.map((result) => <li>{result.name}
                        <li>{result.genres}</li></li>)}
            </ul>

        </div >
    )
}
export default view(SearchBar);