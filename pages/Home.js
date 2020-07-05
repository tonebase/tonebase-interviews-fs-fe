import React, { Component } from 'react';
import '../styleSystem.scss';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }
  componentDidMount() {
    var miliSecondsToHour = 3600000;
    this.onceAnHour = setInterval(() => {
      var upHours = [9,10,11,12,13,14,15,16,17];
      var downHours = [18,19,20,21,22,23,24,1,2,3,4,5,6,7,8];
      var getHour = new Date().getHours();
      if(downHours.includes(getHour)) {
        this.decrementCounter();
      } else {
        this.incrementCounter();
      }

    }, miliSecondsToHour);
  }
  componentWillUnmount() {
    clearInterval(this.onceAnHour);
  }
  incrementCounter() {
    this.setState({counter: this.state.counter + 1});
  }
  decrementCounter() {
    this.setState({counter: this.state.counter - 1});
  }

  render() {
    return (
      <div style={{width: '50%',margin:'0 auto',textAlign:'center'}}>
        {this.state.counter}
        <div>
          <button style={{marginRight:'1px', width: '50px'}} onClick={this.incrementCounter}>Up</button>
          <button style={{marginLeft:'1px', width: '50px'}} onClick={this.decrementCounter}>Down</button>
        </div>
      </div>
    )
  }
}

export default Home;