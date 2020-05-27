import { store } from 'react-easy-state';
import SpotifyWebApi from 'spotify-web-api-node';
import axios from 'axios';

const spotifyApi = new SpotifyWebApi({
    clientId: 'ac848173a6ec4543b815ec6ab0488242',
    clientSecret: '06219c493f6b4d7a8311647fcbdf7010'

});
const SearchStore = store({
    active: false,
    searchToken: '',
    searchQuery: '',
    searchResults: [],
    recentSearches: [],
    showResults: false,
    showRecents: false,
    setSearchQuery: (value) => {
        SearchStore.searchQuery = value;
        if (!value) SearchStore.searchResults = []
    },

    getToken: async () => {
        try {
            const res = await axios.get('/get_token')
            SearchStore.searchToken = res.data.access_token;
            spotifyApi.setAccessToken(res.data.access_token)

        } catch (err) {
            console.log(err)
        }
    },
    search: async (e) => {
        e.preventDefault();
        SearchStore.recentSearches.unshift(SearchStore.searchQuery);
        await spotifyApi.search(SearchStore.searchQuery, ['artist', 'track', 'playlist'], { limit: 10 })
            .then(res => {
                return res;
            })
            .then(artistInfo => {
                SearchStore.searchResults = artistInfo.body.artists.items;
                console.log(SearchStore.searchResults)
            })
            .catch(err => {
                console.log(err)
            })
    },
    preview: () => {
        SearchStore.showRecents = !SearchStore.showRecents;
    },

});

export default SearchStore;

