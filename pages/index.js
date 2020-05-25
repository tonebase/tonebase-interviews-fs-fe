// === CORE ===
import { Fragment } from 'react';
import NextLink from 'next/link';

import Head from 'next/head';

// === STORES ===
import { ModalStore, TabNavStore } from '../stores';
import { store, view, autoEffect } from 'react-easy-state';

// components
import Logo from '../components/UI/logo';
// import style from '../styleSystem.scss';
import style from './index.scss';

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
      <section className="home">
        <Logo />
        <form className="searchbar">
          <input id="search-input" type="text" onChange={e => enterTerm(e)} />
          {/* <input */}
          {/*   id="search-input" */}
          {/*   type="text" */}
          {/*   // value={searchInput.str} */}
          {/*   onKeyDown={e => enterTerm2(e)} */}
          {/* /> */}
          <button type="submit">Search</button>
        </form>
      </section>
      <style jsx>{style}</style>
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
          .home {
            margin: 0 2rem;
            text-align: center;
            width: 100%;
          }

          .searchbar {
            border: 1px solid black;
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            display: flex;
            font-size: 1.5rem;
          }

          input {
            border: 1px solid black;
            text-align: left;
            padding: 0.15em 0.25em;
            width: 100%;
            font-size: inherit;
          }

          button {
            background: white;
            border-style: none;
            border: 1px solid black;
          }
        `}
      </style>
    </>
  );
}

export default view(Home);
