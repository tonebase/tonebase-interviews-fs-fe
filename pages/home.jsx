import React, { useContext } from 'react';
import { Context } from "../lib/helpers/store";    
import SearchForm from '../components/SearchForm/searchForm'
import News from '../components/News/news'
import themeSwitcher from '../lib/functions/themeSwitcher';
import style from '../sass/main.scss';

const Home = () => {
    // retrieve current theme state from the context
    const { store: { theme } } = useContext(Context)
    return (
      <div className="home">
        <style jsx>{style}</style>
        <style jsx global>
          {`
            html {
              font-size: 62.5%; //sets default font size to 10px to allow for responsive design with rems
              width: 97.5vw;
              background-color: ${themeSwitcher(
                theme,
                "rgb(53, 54, 58)",
                "#fff"
              )}; //dynamically changes background color based on current theme state
              font-family: Lato, sans-serif;
              color: ${theme === "light" ? "#000" : "#FFFFFF"};
            }

            ::-webkit-scrollbar {
              width: 0px;
              background: transparent;
            }
          `}
        </style>
        <div className="home__content flex-col">
          <h1
            style={{
              fontSize: "9rem",
              color: `${themeSwitcher(theme, "#EEEEEE", "#9BA0A5")}`,
            }}
          >
            Google
          </h1>
          <SearchForm />
          <News />
        </div>
      </div>
    );
}

export default Home
