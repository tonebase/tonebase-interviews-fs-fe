import React, { useReducer } from 'react'
import Nav from '../components/Nav/nav'
// import App from 'next/app'
import { Context, reducer, INITIAL_STATE } from "../lib/helpers/reducer";

function App({ Component, pageProps}) {
  const [store, dispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    <Context.Provider value={{store, dispatch}}>
      <Nav />
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default App;
