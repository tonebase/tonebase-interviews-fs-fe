// === STORES ===
import { store } from 'react-easy-state';

const counter = store({
  num: 0,
  increment: () => (counter.num += 1),
  decrement: () => (counter.num -= 1),
});

export default CounterStore;