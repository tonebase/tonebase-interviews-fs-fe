import "../googleStyles.css"
import Router from 'next/router'

class Homepage extends React.Component {
    state = {
      searchQuery: "",
    };
  
    handleInputChange = event => {
      this.setState({
        searchQuery : event.target.value
      });
    };
  
    handleSearch = (e) => {
      e.preventDefault();
      // using history.push() to redirect to result page and 
      // hold searchQuery value so, we can use it in the result page
      Router.push({
        pathname: '/results',
        query: { data: this.state.searchQuery },
      })
    }
  
      render() {
        return (
          <>
            <div className="container search" id="search-container">
                <img src="./static/images/googlelogo.png" alt="Google Logo"/>
                  <input
                      onChange = {this.handleInputChange}
                      value = {this.state.searchQuery}
                      type = "text"
                      className = "form-control"
                      placeholder = "Search term"
                    />
                  <button onClick={this.handleSearch} type="submit" className="btn btn-light mt-3">Google Search</button>
            </div>
          </>
        );
      }
  }
  
  export default Homepage;