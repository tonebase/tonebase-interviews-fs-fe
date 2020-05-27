/*
* Fake Fetch function that returns a promise of a query string sliced as if it was "search result"
* This fetch is unstable and fails if your lucky number is betwwen 90-100 (see line 26 for more info)
*/
const fakeFetch = (url) => {
  // Create the fake url object
  const fakeURL = new URL(url);
  // parse fake url for query param
  const queryString = fakeURL.searchParams.get('query');
  // parse fake url for limit param
  const responseLimit = fakeURL.searchParams.get('limit');
  // Split the query param string into an array and use at as the "Response"
  const fakeResults = queryString.split('').map((_char, index, arr) => arr.slice(index).join(''));
  let fakeResponse = {
    ok: true,
    status: 200,
    statusText: 'success',
    type: 'GET',
    url,
    json: () => fakeResults.slice(0, responseLimit)
  }

  return new Promise((resolve, reject) => {
    // Fake a failure if random number is between 90
    setTimeout(() => {
      if((Math.random() * 100) >= 90) reject({
        ...fakeResponse,
        ok: false,
        status: 500,
        statusText: 'failure',
        json: () => []
      });
  
      // resolve with fake response :p
      resolve(fakeResponse);
    }, 750);
  });
}

export default fakeFetch;
