import React, { Fragment } from 'react';
import Head from 'next/head';

// === PAGE WRAPPERS ===
import { withFrame } from '../../components/PageWrappers';
import { store, view } from 'react-easy-state';

// === STYLING ===
import style from './Counter.scss';

const Counter = () => {
  return (
    <Fragment>
      <Head>
        <title>Counter</title>
      </Head>
      <div className='clock-container gradient-transToDark'>
        {/* Clock to increment/decrement will go here */}
      </div>
      <style jsx>{style}</style>
    </Fragment>
  );
};

export default withFrame(view(Counter));
