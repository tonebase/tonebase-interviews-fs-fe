import React from 'react'
import { view } from 'react-easy-state'

import { CounterStore } from '../stores'

const TIME_RANGE = {
  min: 9,
  max: 17,
}

class Counter extends React.Component {
  everyHour = (callback) => setInterval(callback, 1000 * 60 * 60)

  between = (num, min, max) => num >= min && num <= max

  componentDidMount() {
    const today = new Date()
    const todayTimeInHours = today.getHours()

    if (this.between(todayTimeInHours, TIME_RANGE.min, TIME_RANGE.max)) {
      this.everyHour(CounterStore.increment)
    } else {
      this.everyHour(CounterStore.decrement)
    }
  }

  componentWillUnmount() {
    clearInterval(this.everyHour)
  }

  render() {
    return (
      <div style={styles.main}>
        <h1>{CounterStore.count}</h1>
        <div style={styles.actions}>
          <button onClick={CounterStore.increment} style={styles.button}>
            +
          </button>
          <button onClick={CounterStore.decrement} style={styles.button}>
            -
          </button>
        </div>
      </div>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    flexFlow: 'column wrap',
    alignItems: 'center',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '200px',
  },
  button: {
    minWidth: '60px',
    minHeight: '25px',
    fontSize: '24px',
    cursor: 'pointer',
  },
}

export default view(Counter)
