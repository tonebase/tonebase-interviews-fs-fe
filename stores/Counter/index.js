import { store } from "react-easy-state";

const CounterStore = store({
  count: 0,
  up: () => CounterStore.count++,
  down: () => CounterStore.count--
})

export default CounterStore;
