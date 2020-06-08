import React from 'react';
import { store } from 'react-easy-state'

const CounterStore = store({
  num: 0,
  increment: () => CounterStore.num++,
  decrement: () => CounterStore.num--
})

export default CounterStore