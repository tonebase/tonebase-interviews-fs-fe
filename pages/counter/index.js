import React, { Fragment, useEffect, useRef } from 'react';
import Head from 'next/head';

// === PAGE WRAPPERS ===
import { withFrame } from '../../components/PageWrappers';
import { store, view } from 'react-easy-state';

// === STYLING ===
import style from './Counter.scss';

const Counter = () => {
  const clockStore = store({
    hoursReal: new Date().getHours(),
    deg: null,
    hoursMilitary: new Date().getHours(),
    hours: null,
    minutes: null,
    seconds: null,
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
    if (militaryHour <= 0) {
      militaryHour = 24;
    }
    clockStore.hoursMilitary = militaryHour;
    if (hours === -1) {
      clockStore.hours = 11;
    }
    clockStore.hours = hours ? hours : 12; // If the hour is '0', this ternary operator will return 12 instead due to 0 being dynamically typed to false
    clockStore.ampm = militaryHour <= 12 ? 'AM' : 'PM'; // if the hour is greater than 12, set ampm to 'PM', otherwise 'AM'
  };

  const rotateClockwise = () => {
    increment(clockStore.hoursMilitary);
    calcDegrees(clockStore.hours);
    console.log('rotated clockwise');
  };
  const rotateCounterClockwise = () => {
    decrement(clockStore.hoursMilitary);
    calcDegrees(clockStore.hours);
    console.log('rotated counter-clockwise');
  };

  const initialTime = (date) => {
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

  /*   let nextHour = () => {
    return 3600000 - (new Date().getTime() % 3600000);
  }; */

  function updateHour(realHour) {
    if (realHour > 9 && realHour < 17) {
      console.log('Hour of increment');
      rotateClockwise();
    } else {
      console.log('Hour of decrement');
      rotateCounterClockwise();
    }
  }

  function updateTime() {
    let date = new Date();
    let minutes = date.getMinutes(); // Current minutes
    let seconds = date.getSeconds(); // Current seconds
    let hours = date.getHours(); // Current hours

    clockStore.minutes = minutes < 10 ? `0${minutes}` : minutes; // If the minutes is less than 10, have it appear with a 0 in front, so 8 minutes will appear as 08 minutes
    clockStore.seconds = seconds < 10 ? `0${seconds}` : seconds; // If the minutes is less than 10, have it appear with a 0 in front, so 8 minutes will appear as 08 minutes
    clockStore.hoursReal = hours;

    setTimeout(updateTime, 1000);
  }

  const customUseEffect = (func, dependencies) => {
    const didMount = useRef(false);

    useEffect(() => {
      if (didMount.current) func();
      else didMount.current = true;
    }, dependencies);
  };

  customUseEffect(() => {
    // Only run if clockStore.hoursReal changes, but NOT on initial page load to keep the initial time accurate
    updateHour(clockStore.hoursReal);
  }, [clockStore.hoursReal]);

  useEffect(() => {
    clockStore.hoursReal = new Date().getHours();
    updateTime();
    initialTime(new Date());
    calcDegrees(clockStore.hours);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Counter</title>
      </Head>
      <div className='app-container gradient-transToDark'>
        <div className='clock-container'>
          {/* Clock to increment/decrement will go here */}
          <div className='clock borderSolid borderWidth-xl borderRadius-50 bg-cover'>
            <span className='clock__hand-hinge borderRadius-50'></span>
          </div>
        </div>
        <div className='buttons-container'>
          <div className='buttons'>
            <div
              onClick={rotateClockwise}
              className='buttons__btn borderRadius-lg'
            >
              <span>+</span>
            </div>
            <div
              onClick={rotateCounterClockwise}
              className='buttons__btn borderRadius-lg'
            >
              <span>−</span>
            </div>
            <div className='buttons__time'>
              {clockStore.hours}:{clockStore.minutes}:{clockStore.seconds}{' '}
              {clockStore.ampm}
            </div>
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
