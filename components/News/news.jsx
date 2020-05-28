import React, { useState, useEffect, useContext } from 'react';
import NewsItem from './newsItem';
import Spinner from '../Spinner/spinner'
import { Context } from "../../lib/helpers/store";    

import themeSwitcher from '../../lib/functions/themeSwitcher';
import axios from 'axios'
import style from "../../sass/main.scss";


const News = () => {
  const [articles, setArticles] = useState(null)
  const { store: { theme } } = useContext(Context) 

  useEffect(() => {
    // useEffect will only run once after the initial render of the component since the dependency array is empty
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=ef82b8a9600940688b24de439e53ce2c&pageSize=10"
      )
      .then((res) => setArticles(res.data.articles));
  }, [])

  // If there are no articles, render a Spinner until the API call comes back with the data and updates the articles state 
  return !articles ? (
    <Spinner />
   ) : (
      <div className="news">
        <style jsx>{style}</style>
        <div 
          className="news-heading"
          style={{
            backgroundColor: `${themeSwitcher(theme, "rgb(53, 54, 58)","#fff")}`,
          }}
          >Top Headlines in the US</div>
        <div className="news-container">
          {articles.map((article, i) => {
            return (
              <NewsItem key={i} {...article}/>
            )
          })}
        </div>

      </div>
  )
}


export default News