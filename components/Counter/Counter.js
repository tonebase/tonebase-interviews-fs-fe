import React, { Component } from 'react';
import { store, view } from '@risingstack/react-easy-state';
import CounterStore from '../../stores/CounterStore/index';
import moment from 'moment';

// Gets current time
function getFormattedTime() {
  return moment()
    .utc()
    .format('hh:mm:ss A');
}

export default view(() => {

  // State from CounterStore
  const { count, increment, decrement } = CounterStore;

  // State for time
  const clock = store({
    time: getFormattedTime(),
  });

  // Update Clock
  useEffect(() => {
    const id = setInterval(() =>
      (clock.time = getFormattedTime()),
      1000,
    );
    return () => clearInterval(id);
  }, []);

  // Update counter based on time every hour
  useEffect(() => {
    const checkTime = setInterval(() => {
      let currentTime = moment();
      const beforeTime = moment('08:59:59', format);
      const afterTime = moment('18:00:00', format);
      if (currentTime.isBetween(beforeTime, afterTime)) increment;
      else decrement;
    }, 1 * 1000 * 60 * 60,
    );
    return () => clearInterval(checkTime);
  }, []);

  return (
    <div>
      <div>Count{count}</div>
      <div>Current Time{clock.time}</div>
      <button>onClick={increment}Increment</button>
      <button>onClick={decrement}Decrement</button>
    </div>
  );
});