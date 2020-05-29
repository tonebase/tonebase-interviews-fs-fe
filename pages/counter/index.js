import React, { Fragment, useEffect } from 'react';
import Head from 'next/head';

// === PAGE WRAPPERS ===
import { withFrame } from '../../components/PageWrappers';
import { store, view } from 'react-easy-state';

// === STYLING ===
import style from './Counter.scss';

const Counter = () => {
  const clockStore = store({
    deg: null,
    hoursMilitary: null,
    hours: null,
    minutes: null,
    ampm: null,
  });

  const increment = (militaryHour) => {
    militaryHour += 1;
    let hours = militaryHour % 12; // If the hour is greater than 12, change it to the remainder instead
    clockStore.hours = hours ? hours : 12; // If the hour is '0', this ternary operator will return 12 instead due to 0 being dynamically typed to false
    if (militaryHour >= 24) {
      militaryHour = 0;
    }
    clockStore.hoursMilitary = militaryHour;
    clockStore.ampm = militaryHour >= 12 ? 'PM' : 'AM'; // if the hour is greater than 12, set ampm to 'PM', otherwise 'AM'
  };
  const decrement = (militaryHour) => {
    militaryHour -= 1;
    let hours = militaryHour % 12; // If the hour is greater than 12, change it to the remainder instead
    clockStore.hours = hours ? hours : 12; // If the hour is '0', this ternary operator will return 12 instead due to 0 being dynamically typed to false
    if (militaryHour <= 0) {
      militaryHour = 24;
    }
    clockStore.hoursMilitary = militaryHour;
    console.log(militaryHour);
    clockStore.ampm = militaryHour <= 12 ? 'AM' : 'PM'; // if the hour is greater than 12, set ampm to 'PM', otherwise 'AM'
  };

  const rotateClockwise = () => {
    increment(clockStore.hoursMilitary);
    calcDegrees(clockStore.hours);
  };
  const rotateCounterClockwise = () => {
    decrement(clockStore.hoursMilitary);
    calcDegrees(clockStore.hours);
  };

  const initialTime = () => {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    clockStore.ampm = hours >= 12 ? 'PM' : 'AM'; // if the hour is greater than 12, set ampm to 'PM', otherwise 'AM'
    clockStore.hoursMilitary = hours;
    hours = hours % 12; // If the hour is greater than 12, change it to the remainder instead
    clockStore.hours = hours ? hours : 12; // If the hour is '0', this ternary operator will return 12 instead due to 0 being dynamically typed to false
    clockStore.minutes = minutes < 10 ? `0${minutes}` : minutes; // If the minutes is less than 10, have it appear with a 0 in front, so 8 minutes will appear as 08 minutes
  };

  const calcDegrees = (hours) => {
    const degreesToAdd = hours * 30 - 90; // minus 90 because default placement of the hand is 90 degrees past the 12 o'clock placement
    clockStore.deg = degreesToAdd;
  };

  useEffect(() => {
    initialTime();
    calcDegrees(clockStore.hours);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Counter</title>
      </Head>
      <div className='clock-container gradient-transToDark'>
        {/* Clock to increment/decrement will go here */}
        <div className='clock borderSolid borderWidth-xl borderRadius-50 bg-cover'>
          <span className='clock__hand-hinge borderRadius-50'></span>
        </div>
        <div className='buttons'>
          <div
            onClick={rotateClockwise}
            className='btn buttons__increment borderRadius-lg'
          >
            +
          </div>
          <div
            onClick={rotateCounterClockwise}
            className='btn buttons__decrement borderRadius-lg'
          >
            −
          </div>
          <div>
            {clockStore.hours}:{clockStore.minutes} {clockStore.ampm}
          </div>
        </div>
      </div>

      <style jsx>{style}</style>

      <style jsx>{`
        /* DEGREES TO ROTATE CLOCK HAND */
        .clock:before {
          transform: rotate(${clockStore.deg}deg);
        }
      `}</style>
    </Fragment>
  );
};

export default withFrame(view(Counter));
