import { store } from 'react-easy-state'

const CounterStore = store({
  count: 0,
  increment: () => CounterStore.count++,
  decrement: () => CounterStore.count--,
})

export default CounterStore
