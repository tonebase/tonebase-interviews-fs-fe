import Head from 'next/head';

// === STORES ===
import {view } from 'react-easy-state';

// === COMPONENTS ===
import Logo from '../components/UI/logo';
import Searchbar from '../components/Search/searchbar';

import style from '../styleSystem.scss';

function Home() {

  return (
    <>
      <Head>
        <title>Monochrome Google</title>
      </Head>
      <section className="home">
        <Logo />
        <Searchbar />
        {/* cheeky unfunny joke based off duckduckgo's homepage tagline*/}
        <h2 className='home__tagline'>The search engine that tracks your entire search history. Kneel to your monochrome overlord.</h2>
      </section>
      <style jsx global>
        {`
          html,
          body {
            height: 100%;
            margin: 0;
          }

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
      <style jsx>{style}</style>
      <style jsx>
        {`
          .home {
            margin: 0 2rem;
            text-align: center;
            width: 100%;
            font-family: axia;
          }

          .home__tagline {
            margin: 2rem 2rem;
          }
        `}
      </style>
    </>
  );
}

export default view(Home);
