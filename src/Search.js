import React, { Component } from "react";
import Header from "./Header.png";
import logo from "./logo-vid.png";
import "./Search.css";

//import ReactPlayer from "react-player";
// React Player is for embedding the video in the website while you search


class Search extends Component {
// search state and meal state to hold the meal data
state = {
    searchValue: "",
    meals: []
};

//to display the value searched
handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
};

// to make the search API call to fetch data
handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
};

//Using a third part API for meals : Can use google api or HackerRank API for different datasets
makeApiCall = searchInput => {
    var searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({ meals: jsonData.meals });
    });
};


render() {
return (
    <div id="main">
        <img src={Header} />
        <div className="google-logo">
            <img alt="google" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"></img>
        </div>
        <h1>Recipes</h1>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <button onClick={this.handleSearch}>Search</button>
        <br />
        <br />
        <div className="video-link">
        <a target="_blank" href="https://www.youtube.com/watch?v=rxpTjcouaeQ"><img src={logo}></img>Class of 2020: Join Beyonce, Malala and more.</a>
        </div>

        {this.state.meals ? (
          <div id="meals-container">
            {this.state.meals.map((meal, index) => (
              <div class="single-meal" key={index}>
                <h2>{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt="meal-thumbnail" />
              </div>
            ))}
          </div>
        ) : (
          <p>Try searching for a meal</p>
        )}
      </div>
    );
  }
}
export default Search;