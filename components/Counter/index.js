import { useEffect, Fragment } from 'react';
import { store, view } from 'react-easy-state'
import styles from "../../resets.scss";

// style the component
var style = {
  display: "flex",
  "flexDirection": "row",
  "justifyContent": "space-evenly"
}

export default view(() => {
  // set initial time and easy react store
  const time = new Date();
  const counter = store({ num: 0, time: '...', hour: time.getHours()})

  // increment and decrement functions for buttons
  const increment = () => counter.num++;
  const decrement = () => counter.num--;
  
  // update the count by looking at the hour using native JavaScript Date functions
  const updateCount = () => {
    var now = new Date();
    if (now.getMinutes() === 0 && now.getSeconds() === 0) {
      // increment once each hour between 9AM and 5PM inclusive
      if (now.getHours() >= 9 && now.getHours() <= 17) {
        counter.num++;
      }
      // else decrement once each hour
      else {
        counter.num--;
      }
    } 
  }

  // Set up an interval for our clock
  useEffect(() => {
    // set the time client-side so that server and client html trees match
    counter.time = time.toLocaleTimeString('en-US')
    // set up the clock
    let timer = setInterval(() => {
      var newTime = new Date();
      counter.time = newTime.toLocaleTimeString('en-US')
      // update the hour
      if (newTime.getHours() !== counter.hour) {
        counter.hour = newTime.getHours();
      }
    })
    return () => {
      clearInterval(timer)
    }
  },[])

  // Update our count when the hour changes
  useEffect(() => {
    updateCount()
  }, [counter.hour])

  return(
    <Fragment> 
      <div style={style}>
        <style jsx>{styles}</style>
        <button onClick={increment}>Increment</button>
        <a>Counter: {counter.num}</a>
        <a>{counter.time}</a>
        <button onClick={decrement}>Decrement</button>
      </div>
    </Fragment>
  )

})
