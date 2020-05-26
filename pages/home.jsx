import React, { useReducer } from 'react';
import Nav from '../components/Nav/nav'
import SearchForm from '../components/SearchForm/searchForm'
import style from '../sass/main.scss';
import { reducer } from "../lib/helpers/reducer";



const Home = () => {
    return (
      <div className="home">
        <Nav />
        <style jsx>{style}</style>
        <style jsx global>
          {`
            html {
              font-size: 62.5%; //sets default font size to 10px to allow for responsive design with rems
              background-color: rgb(53, 54, 58);
              font-family: Lato, sans-serif;
              color: #FFFFFF;
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
