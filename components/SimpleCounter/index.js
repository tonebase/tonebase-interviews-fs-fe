import React, { useEffect } from "react";
import { view, store } from "react-easy-state";
import moment from 'moment';
import { Button, Icon, styled, Snackbar, Slide, IconButton } from '@material-ui/core';
import Link from 'next/link';

const DecrementButton = styled(Button)({
  margin: '1rem 0rem 1rem 1rem',
  borderColor: '#00c853',
  color: '#00c853',
  '&:hover': {
    borderColor: '#009624',
    color: '#009624',
  },
  '@media (max-width: 600px)': {
    margin: '1rem 0rem',
  },
});

const IncrementButton = styled(Button)({
  margin: '1rem 0rem',
  borderColor: '#2962ff',
  color: '#2962ff',
  '&:hover': {
    borderColor: '#0039cb',
    color: '#0039cb',
  },
});

const MySnackBar = styled(({ message, ...other }) => <Snackbar message={message} {...other} />)({
  '& .MuiSnackbarContent-root': {
    backgroundColor: (props) => props.message.includes('Incremented') ? '#2962ff' : props.message.includes('Decremented') ? '#00c853' : 'rgb(49,49,49)',
    fontFamily: ['"Orbitron"', '"sans-serif"'].join(','),
    color: (props) => props.message === 'Incremented!' ? '#fff' : '#000',
  },
});

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

function SimpleCounter() {
  const counter = store({
    count: 0,
    initialDate: moment(),
    currentDate: moment(),
    clock: moment(),
    notification: false,
    notificationMessage: '',
   });

  const increment = () => {
    counter.count += 1;
    notify(`Incremented to ${counter.count}`);
  };
  const decrement = () => {
    counter.count -= 1;
    notify(`Decremented to ${counter.count}`);
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    counter.notification = false;
    counter.notificationMessage = '';
  };

  const notify = (message) => {
    counter.notification = true;
    counter.notificationMessage = message;
  }

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
    <>
      <MySnackBar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={counter.notification}
        autoHideDuration={5000}
        onClose={handleClose}
        message={counter.notificationMessage}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <Icon>close</Icon>
            </IconButton>
          </React.Fragment>
        }
        TransitionComponent={TransitionDown}
      />
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
            align-items: flex-start;
          }
        }
      `}
      </style>
    </>
  );
}

export default view(SimpleCounter);