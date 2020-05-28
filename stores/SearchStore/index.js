// Import Store
import { store } from 'react-easy-state';
// Import 3rd party wrapper for Spotify Api to speed up development
import SpotifyWebApi from 'spotify-web-api-node';
// Import axios
import axios from 'axios';

// Init Spotify Api client (since this isn't in a production env, I just went ahead and included the secret here)
const spotifyApi = new SpotifyWebApi({
    clientId: 'ac848173a6ec4543b815ec6ab0488242',
    clientSecret: '06219c493f6b4d7a8311647fcbdf7010'

});

/* SearchStore contains data describing about the user's input, and searchResults from requests to the Spotify Api */
const SearchStore = store({
    active: false,
    searchToken: '',
    searchQuery: '',
    searchResults: [],

    /* Updates searchQuery based on value passed from SearchInput molecule */
    setSearchQuery: (value) => {
        SearchStore.searchQuery = value;
        if (!value.length) {
            SearchStore.searchResults = []
        }

    },
    
    /* On page mount, we send a request to our express server to fetch a access token in order to plug into the Spotify Api */
    getToken: async () => {
        try {
            const res = await axios.get('/get_token')
            SearchStore.searchToken = res.data.access_token;
            spotifyApi.setAccessToken(res.data.access_token)

        } catch (err) {
            console.log(err)
        }
    },

    /* Fetches results from the Spotify Api based on the current searchQuery value, stores those results into searchResults */
    search: async (e) => {
        e.preventDefault();
        await spotifyApi.search(SearchStore.searchQuery, ['artist', 'track', 'playlist'], { limit: 7 })
            .then(res => {
                SearchStore.searchResults= res.body.artists.items;
            })
            .catch(err => {
                console.log(err)
            })
    },
  
});

export default SearchStore;

