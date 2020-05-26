import React, { useReducer, useContext } from 'react';
import { Context } from "../lib/helpers/reducer";    
import SearchForm from '../components/SearchForm/searchForm'
import style from '../sass/main.scss';

const Home = () => {
    const { store: { theme } } = useContext(Context)
    return (
      <div className="home">
        <style jsx>{style}</style>
        <style jsx global>
          {`
            html {
              font-size: 62.5%; //sets default font size to 10px to allow for responsive design with rems
              background-color: ${theme === 'dark' ? 'rgb(53, 54, 58)' : '#fff'};
              font-family: Lato, sans-serif;
              color: ${theme === 'dark' ? '#FFFFFF' : '#000'};
            }
          `}
        </style>
        <div className="home__content">
          <h1 className="home__content__logo">Google</h1>
          <SearchForm />
 
        </div>
      </div>
    );
}

export default Home
