// === CUSTOM ===
import MainInput from '../components/Search/MainInput';
import Header from '../components/Search/Header';
import Footer from '../components/Search/Footer';
import { view } from 'react-easy-state';

const FirstPage = () => {
  return (
    <div style={styles.wrapper}>
      <Header />

      <main style={styles.main}>
        <img
          alt="Google"
          height="92"
          width="272"
          src="/static/images/google/Google_2x.png"
          srcSet={`/static/images/google/Google_1x.png 1x, /static/images/google/Google_2x.png 2x`}
          style={styles.img}
        />
        <MainInput />
      </main>

      <Footer />
      <style global jsx>{`
        body,
        html {
          margin: 0;
          padding: 0;
          font-family: arial, sans-serif;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
};

const styles = {
  img: { margin: '95px 0 30px', position: 'relative' },
  main: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: '100',
  },
  wrapper: {
    height: '100vh',
    width: '100vw',
  },
};

export default view(FirstPage);
