import React, { Component } from 'react';
import { store, view } from '@risingstack/react-easy-state';

class Counter extends React.Component {
  counter = store({ num: 0 })
  // Once the component mounts a function will run every
  // hour to check time and increment or decrement count
  componentDidMount() {
    this.checkTime()
    setInterval(this.checkTime, 1000 * 60 * 60)
  }
  // increment & decrement will increase and decrease count by 1
  increment = () => this.counter.num++
  decrement = () => this.counter.num--

  // this function takes the numerical hour 0-23
  // off of the date onject and uses that hour to 
  // increment or decrement

  checkTime = () => {
    const hour = new Date().getHours()
    if (hour > 8 && hour < 18) {
      this.increment()
    } else {
      this.decrement()
    }
  }
  render() {
    return (
      < div className="counter" >
        <h3> Count: {this.counter.num} </h3>
        < button className="button" onClick={this.increment}> INCREMENT</button >
        < button className="button" onClick={this.decrement}> DECREMENT</button >
        {/* I followed the CSS in JS example in the Nextjs docs */}
        <style jsx>
          {`
        .counter {
          padding: 10px;
          margin: 5px;
          color: #555;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
        }
        .button {
          margin: 5px;
          border-radius: 3px;
          background-color: #888;
        }
        `}
        </style>
      </div >

    )
  }
}

export default view(Counter);