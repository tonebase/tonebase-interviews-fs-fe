import React, { Fragment } from 'react';
import Head from 'next/head';

// === PAGE WRAPPERS ===
import { withFrame } from '../../components/PageWrappers';
import { store, view } from 'react-easy-state';

const Counter = () => {
  return <div></div>;
};

export default withFrame(view(Counter));
