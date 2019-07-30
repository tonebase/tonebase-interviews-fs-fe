import style from "./Home.scss";
import Dashboard from "../components/Dashboard";
import SideColunm from "../components/SideColunm";

class Home extends React.Component {
  render() {
    return (
      <div id="Home" className="home">
        <Dashboard />

        <SideColunm />

        <style jsx>{style}</style>
      </div>
    );
  }
}

export default Home;
