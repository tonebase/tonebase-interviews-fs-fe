import React, { useEffect } from "react";
import { view, store } from "react-easy-state";
import withFrame from '../../components/PageWrappers/withFrame';
import Link from 'next/link';
import { Grid, Button, Icon, styled } from '@material-ui/core';
import moment from 'moment';

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


// const useStyles = makeStyles({
//   root: {
//     fontSize: '2rem',
//     lineHeight: '3rem',
//     fontFamily: ['Orbitron', 'sans-serif'].join(),
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'flex-start',
//     '& .MuiButton-root:last-of-type': {
//       marginLeft: '1rem',
//     },
//   },
//   decrement: {
//     borderColor: '#00c853',
//     color: '#00c853',
//     '&:hover': {
//       borderColor: '#009624',
//       color: '#009624',
//     },
//   },
//   // linkContainer: {
//   //   margin: '1rem 0rem',
//   //   display: 'flex',
//   //   alignItems: 'center',
//   // },
//   // link: {
//   //   color: theme.palette.primary.main,
//   //   display: 'inline-flex',
//   //   textDecoration: 'underline',
//   //   marginLeft: '0.5rem',
//   // },
// });

function Counter() {
  // const classes = useStyles();
  const counter = store({ count: 0, initialDate: moment(), currentDate: moment(), clock: moment() });

  const increment = () => (counter.count += 1);
  const decrement = () => (counter.count -= 1);
  // console.log(counter.initialDate.format('hh:mm:ss a'), counter.currentDate.format('hh:mm:ss a'));
  const options = {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    hour12: false,
    timeZone: 'America/Los_Angeles' 
  };
  // console.log(new Intl.DateTimeFormat('en-US', options).format(counter.clock));

  useEffect(() => {
    const id = setInterval(() => {
      counter.clock = moment();
      const now = moment();
      const differenceMS = now.diff(counter.currentDate);
      const differenceMinutes = Math.floor(differenceMS / (1000 * 60));
      
      // const currentDate = new Date();
      // const currentTime = currentDate.getTime();
      // const difference = Math.floor((currentTime - counter.currentDate.getTime()) / (1000 * 60) );
      // console.log('Difference = ', difference);
      if (differenceMinutes >= 60) {
        console.log(differenceMinutes);
        console.log('Initial, current dates', counter.initialDate.format('hh:mm:ss a'), counter.currentDate.format('hh:mm:ss a'));
        counter.currentDate = now.clone();
        // if (currentDate.getHours() >= 9 && currentDate.getHours() <= 17) {
        //   increment();
        // } else {
        //   decrement();
        // }
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
      {/* <div>Clock: {new Intl.DateTimeFormat('en-US', options).format(counter.clock)}</div> */}
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
          // width: 30vw;
          margin: auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          // justify-content: center;
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