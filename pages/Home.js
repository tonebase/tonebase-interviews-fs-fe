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


const Home = () => {
  const [searchText, setSearchText] = useState('');

  const onHandleChange = (text) => {
    setSearchText(text);
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
          onHandleChange={onHandleChange}
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