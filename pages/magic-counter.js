import React, { useState, useEffect, useCallback } from 'react';
// === STYLING ===
import GlobalStyling from "../components/PageWrappers/withFrame/Global.scss";
import style from './magic-counter.scss';

const ERROR_MARGIN_MS = 500;
const START_INCREMENTING_TIME = 9;
const START_DECREMENTING_TIME = 18;

export default function MagicCounter() {
  const [count, setCount] = useState(0);
  const incCounter = useCallback(() => setCount(prev => prev + 1), []);
  const decCounter = useCallback(() => setCount(prev => prev - 1), []);

  useEffect(() => {
    const curTime = new Date();
    const nextHour = curTime.getHours() + 1;
    const firstRunTime = new Date().setHours(nextHour,0,0,0);
    const timeToFirstRun = firstRunTime - curTime + ERROR_MARGIN_MS;
    console.log("MagicCounter -> ms to first run:", timeToFirstRun)

    const updateCounter = () => {
      const curHour = new Date().getHours();
      console.log("MagicCounter will update counter now. curHour is:", curHour)
      if(curHour >= START_INCREMENTING_TIME && curHour < START_DECREMENTING_TIME) 
        incCounter();
      else
        decCounter();
    }

    // Set timer to fire at start of next hour, then set an interval to run every hr thereafter
    let intervalId = null;
    const timeoutId = setTimeout(() => {
      updateCounter();
      intervalId = setInterval(() => { 
        updateCounter(); 
      }, 3600000);  // 1min: 60000, 1hr: 3600000
    }, timeToFirstRun);

    // clear timer and last interval on component teardown
    return(() => {
      clearTimeout(timeoutId);
      if(intervalId !== null) clearInterval(intervalId);
    })
  }, []);
``
  return (
    <div className="magic-counter-wrapper">
      <button className="inc-button actionButton w-33 d-flex flex-row alignItems-center justifyContent-center bgColor-black--lighter fontSize-lg breakLg-fontSize-lg fontFamily-primary textTransform-uppercase letterSpacing-sm paddingTop-sm paddingBottom-sm paddingLeft-lg paddingRight-lg lineHeight-lg textAlign-center borderRadius-lg floatOnHover" onClick={incCounter}>Gimme More!</button>
      <div className="count-display-wrapper w-33 borderRadius-lg">
        <div className="count-value">{count}</div>
      </div>
      <button className="dec-button actionButton w-33 d-flex flex-row alignItems-center justifyContent-center bgColor-black--lighter fontSize-lg breakLg-fontSize-lg fontFamily-primary textTransform-uppercase letterSpacing-sm paddingTop-sm paddingBottom-sm paddingLeft-lg paddingRight-lg lineHeight-lg textAlign-center borderRadius-lg floatOnHover" onClick={decCounter}>I'm a Minimalist</button>
      <style jsx global>{GlobalStyling}</style>
      <style jsx>{style}</style>
    </div>
  );
}
