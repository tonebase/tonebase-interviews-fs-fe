// === CORE ===
import { Fragment } from 'react';
import NextLink from 'next/link';

import Head from 'next/head';

// === STORES ===
import { ModalStore, TabNavStore } from '../stores';
import { store, view, autoEffect } from 'react-easy-state';

// components
import Logo from '../components/UI/logo';
import Searchbar from '../components/Search/searchbar';
import '../styleSystem.scss';

function Home() {
  const searchInput = store({ str: '', num: 0 });
  const enterTerm = e => {
    searchInput.str = e.target.value;
    if (e.target.value && !searchInput.num) searchInput.num = 1;
  };

  const clearInput = () => {
    // document.getElementById('search-input').value = '';
    // searchInput.str = '';
  };

  return (
    <>
      <Head>
        <title>Quasar Frontend Challenge @ Tonebase</title>
      </Head>
      <section className="home ">
        <Logo />
        <Searchbar />
      </section>
      <style jsx global>
        {`
          html,
          body {
            height: 100%;
            margin: 0;
          }

          // body {
          //   display: flex;
          //   align-items: center;
          //   justify-content: center;
          // }

          #__next {
            margin: 0 auto;
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
      <style jsx>
        {`
          .searchbar {
            margin: 0 2rem;
          }
        `}
      </style>
    </>
  );
}

export default view(Home);
