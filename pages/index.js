import React, { Component } from 'react';
import { store, view } from '@risingstack/react-easy-state';

class Counter extends Component {
  counter = store({ num: 0 });
  increment = () => this.counter.num++;
  decrement = () => this.counter.num--;

  componentDidMount() {
    const date = new Date();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    //calculate time remaining(n seconds) until n'o clock
    const secRemaining = ((60 - sec) * 1000) + ((60 - min - 1) * 60 * 1000);
    
    //initial setTimeout invoked after n remaining seconds
    setTimeout(() => {
      const hr = new Date().getHours();
      if(hr >= 9 && hr <= 17) this.increment();
      else this.decrement();

      //then setInterval invoked hourly
      setInterval(() => {
        const h = new Date().getHours();
        //between 9AM to 5PM, increment
        if(h >= 9 && h <= 17) {
          this.increment(); 
        }
        else {
          this.decrement();
        }
      }, 1000 * 60 * 60)
    }, secRemaining)

  }

  render() {
    return(
      <div id='counter' style={styles.counter}>
        <h4 style={styles.h4}>COUNTER</h4>
        <div style={styles.counterDisplay}>
          <button style={styles.btnUp} id='btn-up' onClick={this.increment}>↑</button>
          <h1 style={styles.h1}>{this.counter.num}</h1>
          <button style={styles.btnDown} id='btn-down' onClick={this.decrement}>↓</button>
        </div>
      </div>
    )
  }
}

const styles = {
  counter: {
    fontFamily: "-apple-system, BlinkMacSystemFont, Roboto, \"Segoe UI\", \"Fira Sans\", Avenir, \"Helvetica Neue\", \"Lucida Grande\", sans-serif",
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },

  counterDisplay: {
    display: "flex"
  },

  btnUp: {
    border: "none",
    marginRight: ".5em",
    borderRadius: "4px",
    padding: "0 .5em",
    fontWeight: "bold",
    backgroundColor: "#4285F4",
    fontSize: "24px",
    color: "white",
  },
  btnDown: {
    border: "none",
    marginLeft: ".5em",
    borderRadius: "4px",
    padding: "0 .5em",
    fontWeight: "bold",
    backgroundColor: "#DB4437",
    fontSize: "24px",
    color: "white",
  },

  h1: {
    padding: "0 10px",
    color: "grey",
    fontSize: "24px",
    width: "20px",
    fontWeight: 500,
  },
  h4: {
    margin: "0",
    marginBottom: "1em",
    color: "grey"
  }
};


export default view(Counter);

