import Button from '../utilComponents/Button'
import FormField from '../utilComponents/FormField'

function Home(){
  const [search, setSearch] = React.useState("")
  const [luckyLabel, setLuckyLabel] = React.useState("I'm Feeling Lucky")
  const luckylabels = ["Guitar", "Piano"]
  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <div>
            <img className="logo" src="./static/logos/google.png"/>
          </div>
          <div className="input-background">
            <FormField value={search} handleChange={setSearch}/>
            <Button icon={true} query={search}/>
          </div>
          <div className="button-group">
            <Button label="Google Search" query={search}/>
            <Button label={luckyLabel} query={search} labels={luckylabels} setLuckyLabel={setLuckyLabel}/>
          </div>
        </div>
      </div>
      <style jsx>{`
        html, body{
          margin: 0;
          width: 100vw;
        }
        .App {
          height: 100vh;
          width: 100vw;
        }
        main{
          height: 80%;
        }
        .row{
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .col{
          height: 70%;
          width: 90%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .logo{
          margin: 2rem;
          height: 5rem;
        }

        .input-background{
          display: flex;
          border: 1px solid #dfe1e5;
          box-shadow: none;
          border-radius: 24px;
          z-index: 3;
          height: 3rem;
          width: 100%;
          max-width: 33rem;
          justify-content: center;
          align-items: center;
        }
        .input-background:hover, .input-background:focus-within{
            box-shadow: 0px 2px 4px rgba(100,100,100,0.5);
        }
        .button-group{
          margin: 0.5rem;
        }
      `}</style>
    </div>
  )
}

export default Home
