import React, { useEffect, useState } from 'react'
import { view } from 'react-easy-state'
import { CounterStore } from '../stores'

import Clock from 'react-live-clock'


const Counter = () => {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const lapse= setInterval(
      () => setTime(new Date()),
      1000
    )

    return () => {
      clearInterval(interval)
    }
  }, [])



  useEffect(() => {
    if (time.getSeconds() === 0 && time.getMinutes() === 0) {
      incrementOrDecrement()
    }
  }, [time])


  const incrementOrDecrement = () => {
    if (time.getHours() >= 9 && time.getHours() <= 17) {
      CounterStore.increment()
    } else {
      CounterStore.decrement()
    }
  }



  return (
    <div style={styles.clockContainer}>
      <p >Timer!</p>
      <h2 >
        <Clock format={'h:mm:ss'} ticking={true} value={time} />
      </h2>

      <div style={styles.count}>
        Current Count: {CounterStore.num}
      </div>

      <div>
        <button onClick={() => CounterStore.decrement()}>Decrement</button>
        <button onClick={() => CounterStore.increment()}>Increment</button>
      </div>
    </div>
  )
}

const styles = {
  clockContainer: {
    textAlign: 'center',
    justifyContent: 'right'
  },
  count: {
    marginTop: '10px',
    marginBottom: '10px'
  }
}

export default view(Counter)