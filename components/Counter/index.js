import { view } from 'react-easy-state';
import { num, increment, decrement } from '../../stores/CounterStore/index'



class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }
  
  componentDidMount()  {
    this.hour = this.state.getHours();
    this.checkHour = () => {
      if (hour >= 9 && hour <= 17) increment();
      else decrement();
    };
    this.interval = setInterval(checkHour, 1000 * 60 * 60);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>Counter: {num}</h1>
        <button className='increment' onClick={increment}>
          Increment
        </button>
        <button className='decrement' onClick={decrement}>
          Decrement
        </button>
      </div>
    );
  }
};

export default view(Counter);