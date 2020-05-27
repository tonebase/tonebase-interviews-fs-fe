import React, { useReducer } from 'react'
import Nav from '../components/Nav/nav'
// import App from 'next/app'
import { Context, reducer, INITIAL_STATE } from "../lib/helpers/reducer";

function App({ Component, pageProps}) {
  const [store, dispatch] = useReducer(reducer, INITIAL_STATE)
  return (
    // wraps all components in the app and gives them all access to the context and reducer actions 
    
    // Initially, I was considering prop drilling to pass down the current theme state,
    // but as I created more components, it became clear that the Context API was the cleaner/more efficient approach
    <Context.Provider value={{store, dispatch}}>
      <Nav />
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default App;
