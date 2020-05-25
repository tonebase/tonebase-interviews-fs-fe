import axios from "axios";
import React from "react";
import ResultsStyle from "../results.scss";
import Link from "next/link";

class Results extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      search: "",
      searchResults: [],
      loaded: false,
      data: {}
    }
    this.loadResults = this.loadResults.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.loadResults();
  }

  // this function uses an API to obtain search results from Google and we set the data to state.
  loadResults = async () => {
    var query = window.location.search.split("=")[1];
    var API_KEY = "d099ee0ec9e95bace6d49f7a07931ef2"
    var url = "http://api.serpstack.com/search?access_key=" + API_KEY + "&type=web&query=" + query

    const response = await axios.get(url);
    // debugger;
    console.log(response);
    // console.log(response.data.inline_videos.map(video => video.url.slice(0,video.url.indexOf("m")) + "m/embed" + video.url.slice(video.url.indexOf("m")+1)))
    // console.log(response.data.inline_videos.map(video => video.url.map(singleUrl => `${singleUrl.slice(0, url.indexOf("m")) + "m/embed" + (url.slice(url.indexOf("m") + 1))}`)));
    this.setState({ 
      searchResults: response.data.organic_results, 
      data: response.data, 
      loaded: true
    });
   
  }
  
  //this function sets the state to the search input.
  updateQuery(e) {
    this.setState({ search: e.currentTarget.value })
  }

  //this function redirects them to the the results page again but with updated search query.
  handleClick = (e) => {
    e.preventDefault();
    window.location.href = `/results?searchQuery=${this.state.search}`
  }

  render(){
    const {data, loaded, search, searchResults} = this.state;
    const noResults = (
      <div className="no-results">
        <style jsx>{ResultsStyle}</style>
        {data.search_information && <p>Your search - <span className="noresult-query-display">{data.search_information.query_displayed}</span> - did not match any documents.</p>}
        <p>
          Suggestions:
        </p>
        <li>Make sure all words are spelled correctly.</li>
        <li>Try different keywords.</li>
        <li>Try more general keywords.</li>
        <li>Try fewer keywords.</li>
      </div>
    )
    // Conditional statement that checks if the results are loaded.
    //If it has, you render the results from the query otherwise show users the loading page.
    if(!loaded){
      return (
        <div className="loading-container">
          <style jsx>{ResultsStyle}</style>
          <img src="./static/images/loading.gif" className="loading-image"></img>
        </div>
      )
    }
    
    const withResults = (
      <div className="results">
        <style jsx>{ResultsStyle}</style>
        <p className="result-about">About {data.search_information.total_results} results ({data.request.total_time_taken} seconds)</p>
        {searchResults.map(result => {
          return (
            <div className="result-item">
              <span className="result-displayed-url">{result.displayed_url.split("http://")[1]}</span>
              <a href={result.url}>
                <span className="result-title">{result.title}</span>
              </a>
              <span className="result-snippet">{result.snippet}</span>
            </div>
          )
        })}
      
        {/* {data.inline_videos && data.inline_videos.map(video => {
          return(
            <div>
              <iframe width="420" height="345" src={video.url.slice(5, video.url.indexOf("m")) + "m/embed" + video.url.slice(video.url.indexOf("m") + 1)}>
                  {video.title}
                </iframe>
            </div>
          )
        })} */}
        
        {data.related_searches && 
          <React.Fragment>
            <p className="related-searches-header">Searches related to {data.search_information.query_displayed}</p>
            {data.related_searches.map(search => {
              return (
                <div className="related-searches">
                  <a href={search.url}>
                    <span className="related-searches-items">{search.query}</span>
                  </a>
                </div>
              )
            })}
          </React.Fragment>
        }


        <div className="results-pages">
          <img src="../static/images/google-logo.png" className="results-page-company-logo"></img>
          <div className="results-page-numbers">
            {data.pagination && 
            <React.Fragment>
              
              <p>
                {data.pagination.current_page + "".split("").slice(1, data.pagination.current_page + "".split("").length).map(page => {
                  {for (const pageurl in data.pagination.other_page_urls){
                    return(
                      <a href={data.pagination.other_page_urls[pageurl]}>
                        <span>{page}</span>
                      </a>
                    )
                  }}
                })}
              </p>
           
              <a href={data.pagination.next_page_url} className="results-page-next">
                <p>Next</p>
              </a>
            </React.Fragment>
            }
          </div>
        </div>
      </div>
    )
      return(
        <div className="results-container">
          <style jsx>{ResultsStyle}</style>

          <div className="results-navbar">
            <Link href="/homepage">
              <img src="../static/images/google-logo.png" className="results-company-logo"></img>
            </Link>
            <div className="results-form-container">
              <form id="results-form" autoComplete="off">
                <div className="results-form-input">
                  <input type="text" id="results-search-bar" onChange={this.updateQuery}></input>
                  <button className="results-search-button" onClick={this.handleClick}>
                    <i className="fas fa-search" id="results-fa-search"></i>
                  </button>
                </div>
              </form>
              <div className="navbar-tabs">
                <span className="navbar-tab-all">
                  <i className="fas fa-search" id="resultstab-fa-search"></i> All
                </span>
              </div>
            </div>
            <div>
            </div>
          </div>

          {searchResults.length > 0 && withResults}
          {searchResults.length === 0 && noResults}

          
        </div>
      )
  }
}


export default Results;

//slice items