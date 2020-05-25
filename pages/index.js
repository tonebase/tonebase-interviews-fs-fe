import Head from "next/head";

// === COMPONENTS ===
import Logo from "../components/UI/logo";
import Searchbar from "../components/Search/searchbar";

import style from "../styleSystem.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Monochrome Google</title>
      </Head>
      <section className="home">
        <Logo />
        <Searchbar />
        {/* cheeky unfunny joke based off duckduckgo's homepage tagline*/}
        <h2 className="home__tagline">
          The search engine that tracks your every move. Kneel to
          your monochrome overlord.
        </h2>
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
      {/* normalize css */}
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
            background-color: white;
            margin: 2rem 1rem;
          }
        `}
      </style>
    </>
  );
}
