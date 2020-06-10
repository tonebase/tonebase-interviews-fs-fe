import { view } from "react-easy-state";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count : this.props.initCount
    };
  }
  componentDidMount() {
    // setInterval( () => this.tick(),1000*60 )//every minute
    
    setInterval( () => this.tick(),1000*60*60 )//every hour
  }
  tick(){
    const hr = new Date().getHours();
    // const hr = new Date().getMinutes();
    // const hr = new Date().getSeconds();
    if (hr >= 9 && hr <= 17) {
      this.setState(({ count }) => ({
        count: count + 1
      }));
    }
    else if(hr<=8 || (hr >= 18 && hr <= 24)){
      this.setState(({ count }) => ({
        count: count - 1
      }));
    }
  }

  handleClickAdd = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  }
  handleClickSub = () => {    
    this.setState(({ count }) => ({
      // count: (count - 1) > 0 ? count-1 : 0
      count: count - 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClickAdd}>+</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClickSub}>-</button>
      </div>
    );
  }
}
Counter.defaultProps={
  initCount:0
}

export default view(Counter);