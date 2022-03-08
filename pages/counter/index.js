import React, { useEffect, useRef } from "react";
import { CounterStore } from "../../stores";
import { view } from "react-easy-state";
import CounterStyle from './CounterPageStyles.scss';
import withFrame from "../../components/PageWrappers/withFrame";
import { DateTime } from 'luxon';
import { CounterButton } from "../../components/Atoms/Buttons";
import { CounterLabel } from "../../components/Atoms/DataDisplay";

const CounterPage = view(() => {

  const intervalId = useRef(null);
  
  // 1 hour in milliseconds = 1000 * 60 * 60
  const hoursInMS = 3600000;

  // This method calls a setInterval that is associeted with intervalId to be clean afterward
  const updateEveryHour = () => {
    intervalId.current = setInterval(() => {
      actionByTheHour()
    }, hoursInMS);
  }

  // Function that increments or decrements based on the hour of the day
  // Between 9AM and 5PM increments
  // Between 6PM and 8AM decrements
  const actionByTheHour = () => { 
    let currentHour = DateTime.now().toObject().hour;
    if (currentHour >= 9 && currentHour <= 17) {
      CounterStore.increment();
    }
    if ((currentHour >= 18 && currentHour <= 23) || (currentHour >= 0 && currentHour <= 8)) {
      CounterStore.decrement();
    }
  }

  useEffect(() => { // useEffect that runs only when the component is mounted
    const nextDate = DateTime.now();
    let timeout = null;
    let difference = nextDate.endOf("hour").diff(DateTime.now(), 'milliseconds').toObject().milliseconds;
    timeout = setTimeout(() => {
      actionByTheHour();
      updateEveryHour();
    }, difference);

    return () => { // Clean up function to clear the interval and timeout if they exist
      if (timeout) clearTimeout(timeout);
      if (intervalId.current) clearInterval(intervalId.current);
    }
  }, [])

  // This whole render could be made a molecule and this component would just update the value
  return (
    <>
      <div className="counter">
        <div className="counter__container">
          <h1 className="fontSize-xxxl marginBottom-xl">
            Counter
          </h1>
          <div className="d-flex w-25 alignItems-center justifyContent-spaceBetween">
            <CounterButton onClick={CounterStore.decrement}>-</CounterButton>
            <CounterLabel>{ CounterStore.counter }</CounterLabel>
            <CounterButton increment onClick={CounterStore.increment}>+</CounterButton>
          </div>
        </div>
      </div>
      <style jsx>{CounterStyle}</style>
    </>
  );
});

export default withFrame(CounterPage);