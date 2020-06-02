import Presentation from "./presentation"
import { view } from 'react-easy-state'

import { CounterStore } from '../../stores';

// range of hours to increase count (inclusive)
const BOTT = 9, TOP = 17

class Counter extends React.Component {
  intervalId = null

  onHour = () => {
    const hour = (new Date).getHours();
    if (hour >= BOTT && hour <= TOP) CounterStore.up();
    else CounterStore.down();
  }

  componentDidMount() {
    this.intervalId = setInterval(this.onHour, 1000 * 60 * 60)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    return (
      <Presentation
        count={CounterStore.count}
        up={CounterStore.up}
        down={CounterStore.down}
        />
    )
  }
}


export default view(Counter)
