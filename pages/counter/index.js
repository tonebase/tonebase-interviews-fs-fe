import React, { useEffect } from "react";
import { view, store } from "react-easy-state";
import moment from 'moment';
import withFrame from '../../components/PageWrappers/withFrame';
import Link from 'next/link';
import { Button, Icon, styled } from '@material-ui/core';

const DecrementButton = styled(Button)({
  margin: '1rem 0rem 1rem 1rem',
  borderColor: '#00c853',
  color: '#00c853',
  '&:hover': {
    borderColor: '#009624',
    color: '#009624',
  },
});

const IncrementButton = styled(Button)({
  margin: '1rem 0rem 1rem 0rem',
  borderColor: '#2962ff',
  color: '#2962ff',
  '&:hover': {
    borderColor: '#0039cb',
    color: '#0039cb',
  },
});

function Counter() {
  const counter = store({ count: 0, initialDate: moment(), currentDate: moment(), clock: moment() });

  const increment = () => (counter.count += 1);
  const decrement = () => (counter.count -= 1);

  useEffect(() => {
    const id = setInterval(() => {
      counter.clock = moment();
      const now = moment();
      const differenceMilliSecs = now.diff(counter.currentDate);
      const differenceMinutes = Math.floor(differenceMilliSecs / (1000 * 60));
      
      if (differenceMinutes >= 60) {
        counter.currentDate = now.clone();
        if (now.hours() >= 9 && now.hours() <= 17) {
          increment();
        } else {
          decrement();
        }
      }
    }, 1000);
    return () => clearInterval(id);
  });

  return (
    <div className="content">
      <div>Time: {counter.clock.format('hh:mm:ss a')}</div>
      <div>Counter: {counter.count}</div>
      <div className="buttonContainer">
        <IncrementButton type="button" variant="outlined" color="primary" onClick={increment}>
          Increment
        </IncrementButton>
        <DecrementButton type="button" variant="outlined" onClick={decrement}>
          Decrement
        </DecrementButton>
      </div>
      <div className="linkContainer">
        <h5>Back to
          <Link href="/"><a className="link">Home</a></Link>
        </h5>
        <Icon>chevron_right</Icon>
      </div>
      <style jsx>{`
        .content {
          font-size: 2rem;
          line-height: 3rem;
          font-family: 'Orbitron', sans-serif;
          height: 100%;
          margin: auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .linkContainer {
          margin: 1rem 0rem;
          font-size: inherit;
          line-height: inherit;
          display: flex;
          align-items: center;
        }
        .link {
          color: #2962ff;
          display: inline-flex;
          text-decoration: none;
          margin-left: 0.5rem;
        }
        .link:hover {
          color: #0039cb;
          text-decoration: underline;
        }
        .buttonContainer {
          margin: 1rem 0rem;
          display: flex;
          justify-content: space-evenly;
        }
        @media (max-width: 600px) {
          .buttonContainer {
            flex-direction: column;
          }
        }
      `}
      </style>
    </div>
  );
}

export default withFrame(view(Counter));