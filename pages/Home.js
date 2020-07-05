import React, { useEffect } from 'react';
import '../styleSystem.scss';
import { store, view, autoEffect } from '@risingstack/react-easy-state';


  const counter = store({
    num: 0,
    incrementCounter: () => counter.num++,
    decrementCounter: () => counter.num--
  });
  autoEffect(() => {
  var miliSecondsToHour = 3600000;
  let onceAnHour = setInterval(() => {
    var downHour = [18,19,20,21,22,23,24,1,2,3,4,5,6,7,8];
    var getHour = new Date().getHours();
    if(downHour.includes(getHour)) {
      counter.decrementCounter();
    } else {
      counter.incrementCounter();
    }

  }, miliSecondsToHour);
  return function(){ clearInterval(onceAnHour);}
});



export default  view( () => (
  <div style={{width: '50%',margin:'0 auto',textAlign:'center'}}>
    {counter.num}
    <div>
      <button style={{marginRight:'1px', width: '50px'}} onClick={counter.incrementCounter}>Up</button>
      <button style={{marginLeft:'1px', width: '50px'}} onClick={counter.decrementCounter}>Down</button>
    </div>
  </div>
  ));