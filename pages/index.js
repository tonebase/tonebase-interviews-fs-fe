import { useEffect } from 'react';
import { view } from 'react-easy-state';
import counter from '../stores/Counter';
import counterStyles from '../lib/styleGuide/counters.scss';

const Index = () => {
  const { num, increment, decrement } = counter;

  // check the hour number every hour
  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    const checkHour = () => {
      // increment counter every hour between 9am-5pm inclusive
      if (hour >= 9 && hour <= 17) increment();
      // decrement counter every other hour
      else decrement();
    };

    setInterval(checkHour, 1000 * 60 * 60);

    return () => clearInterval(checkHour);
  }, []);

  return (
    <main>
      <h1>tonebase Counter</h1>
      <h2>{num}</h2>
      <button className='increment' type='button' onClick={increment}>
        Increment
      </button>
      <button className='decrement' type='button' onClick={decrement}>
        Decrement
      </button>

      <style jsx>{counterStyles}</style>
    </main>
  );
};

export default view(Index);
