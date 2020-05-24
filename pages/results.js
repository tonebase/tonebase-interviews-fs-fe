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
    var API_KEY = "605c6c6018d2ad327294f089ad5bb6cf"
    var url = "http://api.serpstack.com/search?access_key=" + API_KEY + "&type=web&query=" + query

    const response = await axios.get(url);
    // debugger;
    console.log(response);
    this.setState({ searchResults: response.data.organic_results });
    this.setState({data: response.data})
    this.setState({loaded: true});
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
    // Conditional statement that checks if the results are loaded.
    //If it has, you render the results from the query otherwise show users the loading page.
    if (this.state.loaded === true){
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
                  <input type="text" id="results-search-bar" onChange={this.updateQuery} value={this.state.search} ></input>
                  <i className="fas fa-search" id="results-fa-search" onClick={this.handleClick}></i>
                </div>
              </form>
              <p>all</p>
            </div>
            <div>
            </div>
          </div>


          <div className="results">
            <p className="result-about">About {this.state.data.search_information.total_results} results ({this.state.data.request.total_time_taken} seconds)</p>
            {this.state.searchResults.map(result => {
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
            <p className="related-searches-header">Related searches</p>
            
            {this.state.data.related_searches ? this.state.data.related_searches.map(search => {
              return (
                <div className="related-searches">
                  <a href={search.url}>
                    <span className="related-searches-items">{search.query}</span>
                  </a>
                </div>
              )
            }) : null}
            <div className="results-pages">
              <img src="../static/images/google-logo.png" className="results-page-company-logo"></img>
              <div className="results-page-numbers">
                {/* <p>{this.state.data.pagination.current_page}</p> */}
                <a href={this.state.data.pagination.next_page_url} className="results-page-next">
                  <p>Next</p>
                </a>
              </div>
            </div>

          </div>
        </div>
      )
    } else {
      return(
        <div className="loading-container">
          <style jsx>{ResultsStyle}</style>
          <img src="./static/images/loading.gif" className="loading-image"></img>
        </div>
      )
    }
  }
}


export default Results;

//slice items