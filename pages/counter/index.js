import React, { Fragment } from 'react';
import Head from 'next/head';

// === PAGE WRAPPERS ===
import { withFrame } from '../../components/PageWrappers';
import { store, view } from 'react-easy-state';

// === STYLING ===
import style from './Counter.scss';

const Counter = () => {
  const degrees = store({ num: 0 });
  const rotateClockwise = () => (degrees.num += 30);
  const rotateCounterClockwise = () => (degrees.num -= 30);

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
          <div>{degrees.num}</div>
        </div>
      </div>

      <style jsx>{style}</style>
    </Fragment>
  );
};

export default withFrame(view(Counter));
