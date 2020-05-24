import HomeStyle from "../home.scss";
import axios from "axios";

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      search: ""
    }
    this.updateQuery = this.updateQuery.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateQuery(e){
    this.setState({search: e.currentTarget.value})
  }

  handleClick = (e) => {
    e.preventDefault();
    window.location.href=`/results?searchQuery=${this.state.search}`
  }

  render(){
    return(
      <div className="home-container">
        <div className="home-center-container">
            <p className="company-title">
              <span className="company-letter">G</span>
              <span className="company-letter">o</span>
              <span className="company-letter">o</span>
              <span className="company-letter">g</span>
              <span className="company-letter">l</span>
              <span className="company-letter">e</span>
            </p>
            <style jsx>{HomeStyle}</style>
            <div className="form-container">
              <form id="form" autoComplete="off">
                <div className="form-input">
                  <i className="fas fa-search"></i>
                  <div>
                    <input type="text" id="search-bar" className="form-control" onChange={this.updateQuery} value={this.state.search} ></input>
                  </div>
                </div>
                <div className="form-button">
                  <button className="search-button" onClick={this.handleClick} id="searchButton">Google Search</button>
                </div>
              </form>
            </div>
        </div>
      </div>
    )
  }
}

export default Home;