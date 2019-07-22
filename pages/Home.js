import style from "./Home.scss";

class Home extends React.Component {
  render() {
    return (
      <div id="Home" className="home">
        Welcome to the interview boilterplate!
        <br />
        <br />
        <br />
        <div className="small">
          Edit this like any normal React application. Documentation for NextJS
          is available in the Repos linked in the ReadMe. You can write JSX
          here, import packages up top, write SCSS in the Home.scss file and
          watch everything hot reload in realtime. Webpack FTW! Good luck :)
        </div>
        <style jsx>{style}</style>
      </div>
    );
  }
}

export default Home;
