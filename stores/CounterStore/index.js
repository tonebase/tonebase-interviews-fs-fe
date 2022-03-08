import { store } from "react-easy-state";

const CounterStore = store({
  counter: 0,
  increment: () => CounterStore.counter++,
  decrement: () => CounterStore.counter--,
});

export default CounterStore;