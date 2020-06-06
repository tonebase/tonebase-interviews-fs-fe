// === STORES ===
import { store } from "react-easy-state";
import axios from 'axios'

const PageStore = store({
  
    rendered : false,
    query: "",

    setQuery: (event) => {
        PageStore.query = event.target.value 
    },

    search: (query) => {
        //would probably call an axios GET on an API here
        window.location.href = `https://www.google.com/search?q=${query}`
    }
    

});

export default PageStore;
