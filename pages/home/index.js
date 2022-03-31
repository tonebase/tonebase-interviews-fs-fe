import { store, view } from "react-easy-state";
import style from "./Home.scss";

export const HomeStore = store({
  count: 0,

  /**
   * Increment the count by updating the store's `count` variable.
   * @param {Event} event Event passed in by the invoking React component.
   */
  increment: event => {
    HomeStore.count++;
  },

  /**
   * Decrement the count by updating the store's `count` variable
   * @param {Event} event Event passed in by the invoking React component.
   */
  decrement: event => {
    HomeStore.count--;
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  /**
   * When the component mounts to the DOM, set a timer to call tick() every 1000ms or every second.
   */
  componentDidMount() {
    this.timer = setInterval(() => this.tick(new Date()), 1000);
  }

  /**
   * When the component unmounts from the DOM, clear the timer set in `componentDidMount`
   */
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  /**
   * Called every second. Check the time to see if the clock is at a new hour.
   * If it is, update the count according to the new hour.
   * (Date.getHours() returns an integer between 0 and 23)
   * @param {Date} date the current date
   */
  tick(date) {
    if (date.getMinutes() === 0 && date.getSeconds() === 0) this.updateCount(date.getHours());
  }

  /**
   * If the hour is between 9 (9am) and 17 (5pm) inclusive, increment the count. increment 8
   * Otherwise, 0 <= hour <= 8 || 18 <= hour <= 23, decrement 13 times
   * therefore the hour is between 6pm and 8am, decrement the count.
   * @param {number} hour the new hour to check
   */
  updateCount(hour) {
    // If hour is between 9 and 17, increment
    // else (if hour is between 0 and 8, or 18 and 23), decrement
    if (9 <= hour && hour <= 17) HomeStore.increment(null);
    else HomeStore.decrement(null);
  }

  render() {
    return (
      <>
        <style jsx>{style}</style>
        <div className="home">
          <div className="heading">
            <h1>Comic Sans Counter</h1>
            <h2>By Adam Sloma</h2>
          </div>

          <div className="counter">
            <div>
              <label>{HomeStore.count}</label>
            </div>

            <div className="buttons">
              <button onClick={HomeStore.decrement}>-</button>
              <button onClick={HomeStore.increment}>+</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default view(Home);
