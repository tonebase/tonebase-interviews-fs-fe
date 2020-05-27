// === CORE ===
const express = require("express");
const next = require("next");
const SpotifyWebApi = require('spotify-web-api-node');

// === 3RD PARTY ===
require("dotenv").config();

// === PARAMETRIZED ROUTING ===
const routes = require("./routes");

// === FUNCTIONS ===
const { serverStartMessages } = require("./lib/functions");

// === CONSTANTS ===
const PORT = process.env.PORT || 3000;

// === STORE ====

// === SETUP APP ===
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  // here you could do some express stuff if you fancy, eg. running custom middleware or offering an API
  // server.get('/api', (req, res) => {
  //   return res.send({ version: 1.0 })
  // });
  // Create the api object with the credentials
  server.get('/get_token', (req, res) => {
    const spotifyApi = new SpotifyWebApi({
      clientId: 'ac848173a6ec4543b815ec6ab0488242',
      clientSecret: '06219c493f6b4d7a8311647fcbdf7010'

    });
    spotifyApi.clientCredentialsGrant().then(
      function (data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);
        // Save the access token so that it's used in future calls
        // spotifyApi.setAccessToken(data.body['access_token']);
        return res.send({ access_token: data.body['access_token'] })
      },
      function (err) {
        console.log('Something went wrong when retrieving an access token', err);
      }
    );

  })

  // Retrieve an access token.


  // General NextJS route handler
  server.use(handler);

  // Start server and trigger messages
  server.listen(PORT, err => {
    serverStartMessages(err, PORT);
  });
});
