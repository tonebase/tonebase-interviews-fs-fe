// === CORE ===
import { Fragment } from 'react';
import NextLink from 'next/link';

import Head from 'next/head';

// === STORES ===
import { ModalStore, TabNavStore } from '../stores';
import { view } from 'react-easy-state';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Quasar Frontend Challenge @ Tonebase</h1>
      </div>
    );
  }
}

export default view(Home);
