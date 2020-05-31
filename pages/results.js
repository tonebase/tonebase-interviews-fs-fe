import axios from "axios";
import { withRouter } from 'next/router'
import Router from 'next/router'

class Results extends React.Component {
  state = {
    searchQuery: "",
    allResults:[],
    organicResults: [],
    resultFound: false,
    success: false
  };

  componentDidMount() {
    // fetching data with query that input from the homepage
    const query = this.props.router.query.data;
    this.handleSearch(query)
  }

  handleSearch = (query) => {
    const params = {
      api_key: "BB7D632230BF426FB75424AC775B6A59",
      q: query
    }
    // make the http GET request to Scale SERP
    axios.get('https://api.scaleserp.com/search', { params })
      .then( response => {
        const data = response.data;
        if (data.organic_results) {
          this.setState({
            allResults: data,
            organicResults: data.organic_results,
            resultFound: true,
            success: true
          });
        } else if (data.search_information.query_displayed) {
          this.setState({
            allResults: data,
            resultFound: false,
            success: true
          });
        }
      }).catch(error => {
        console.log(error);
      });
  }

  handleInputChange = event => {
    this.setState({
      searchQuery : event.target.value
    });
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({
      success: false
    })
    this.handleSearch(this.state.searchQuery)
  };

  render() {
      if (this.state.success) { 
        if (this.state.resultFound) {
          return (
            <>
              <nav className="navbar" id="result-search-container">
              <img src="./static/images/googlelogo.png" id='results-google-logo' alt="Google Logo" onClick={() => Router.push('/homepage')}></img>
               <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" 
                    type="search" 
                    onChange = {this.handleInputChange}
                    value = {this.state.searchQuery}
                    placeholder = "Search term"/>
                <button class="btn btn-light my-2 my-sm-0" onClick={this.handleClick} type="submit">Search</button>
              </form>
              </nav>
              {/* resultes section */}
              { 
                this.state.organicResults.map( result => {
                  return (
                    <div className="container result" key={result.position}>
                      <a className="link-container" href={result.link} >
                        <p className="display-link">{result.displayed_link}</p>
                        <h3 className="title">{result.title}</h3>
                      </a>
                      <span>{result.snippet}</span>
                    </div>
                  );
                })
              }
              {/* realated searches section */}
              <div className="container related-search">
                <h3>Related Searches</h3> 
                {
                  this.state.allResults.related_searches ? this.state.allResults.related_searches.map( relatedSearch => {
                    return (
                      <div>
                        <a className="related-search-link" href={relatedSearch.link}> {relatedSearch.query} </a>
                      </div>
                    )
                  }) 
                  : <p>Not found..</p> 
                }
              </div>
            </>

          )
        } else {
            return (
              <>
              <nav className="navbar" id="result-search-container">
              <img src="./assets/googlelogo.png" id='results-google-logo' alt="Google Logo"/>
               <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" 
                    type="search" 
                    onChange = {this.handleInputChange}
                    value = {this.state.searchQuery}
                    placeholder = "Search term"/>
                <button class="btn btn-light my-2 my-sm-0" onClick={this.handleClick} type="submit">Search</button>
              </form>
              </nav>
              <div className="container" id="search-not-found">
                  <p>Your search - <b>{this.state.allResults.search_information.query_displayed} </b> - did not match any documents</p>
                  <p>Suggestions:</p>
                  <ul>
                    <li>Make sure all words are spelled correctly.</li>
                    <li>Try different keywords.</li>
                    <li>Try more general keywords.</li>
                  </ul>
              </div>
              </>
            );
        }
      } else {
          return (
            <div className="container" id="loading">
              <img src="https://media.giphy.com/media/y1ZBcOGOOtlpC/giphy.gif" alt="loading"/>
            </div>
          );
      }
  }
}

export default withRouter(Results);