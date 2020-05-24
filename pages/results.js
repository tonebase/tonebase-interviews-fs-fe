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
  }

  componentDidMount(){
    this.loadResults();
  }

  loadResults = async () => {
    var query = window.location.search.split("=")[1];
    var API_KEY = "32944db1034927e41f76ff42c17267af"
    var url = "http://api.serpstack.com/search?access_key=" + API_KEY + "&type=web&query=" + query

    const response = await axios.get(url);
    // debugger;
    console.log(response);
    this.setState({ searchResults: response.data.organic_results });
    this.setState({data: response.data})
    this.setState({loaded: true});
  }
  
  render(){
    if (this.state.loaded === true){
      return(
        <div className="results-container">
          <style jsx>{ResultsStyle}</style>
          <div className="results">
            <p className="result-about">About {this.state.data.search_information.total_results} results({this.state.data.request.total_time_taken} seconds)</p>
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
                    <span>{search.query}</span>
                  </a>
                </div>
              )
            }) : null}
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