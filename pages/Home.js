import React, { useState } from 'react';
import { withFrame } from "../components/PageWrappers";

// style

import styles from './Home.scss';

// components
import SearchBar from '../components/SearchBar';
import {
  Spacer
} from "../components/Molecules/Layout";
import SearchButton from '../components/SearchBar/SearchButton';

// If I had time I would replace this with a call to google's api to get search results
// and make an array of suggestions from it

const searchMock = [
  'apple',
  'bananna',
  'smoothie',
  'pizza',
  'pasta',
  'tacos al pastor',
  'now I\'m hungry',
  'should have chosen',
  'a different subject',
  'for mock data'
];

// move to util dir
// modified from https://stackoverflow.com/questions/11404855/javascript-autocomplete-without-external-library

const suggest = (input, search) => {
  if (input.length > 0) {
    var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
    return search.filter(function (item) {
      if (item.match(reg)) {
        return item;
      }
    });
  } else { return '' }
}

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState(searchMock);

  const onHandleChange = (text) => {
    setSearchText(text);
    setSearchSuggestions(suggest(text, searchMock));
  }

  const search = () => {
    window.location.href = `https://google.com/search?q=${searchText}`;
  }

  const loadSite = () => {
    // TODO: replace with result from google api call
    const luckyMock = 'https://myspace.com';
    window.location.href = luckyMock;
  }

  return (
    <div
      id="appWrapper"
      className="appWrapper breakLg-paddingLeft-md breakLg-paddingRight-md"
    >
      <span className="hidden-lg hidden-xl">
        <Spacer vertical space={24} />
      </span>

      <div className="flexColumn flex-col alignItems-center justifyContent-center">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
        />
        <SearchBar
          searchSuggestions={searchSuggestions}
          onHandleChange={onHandleChange}
          search={search}
        />

        <div className="buttonContainer">
          <SearchButton type="button"
            buttonText="Google Search"
            click={search}
          />
          <SearchButton type="button"
            buttonText="I'm feeling lucky"
            click={loadSite}
          />
        </div>
      </div>



      <style jsx>
        {styles}
      </style>
    </div>
  )

}

export default withFrame(Home);