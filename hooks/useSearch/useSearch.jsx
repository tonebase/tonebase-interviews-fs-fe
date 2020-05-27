import { useEffect, useReducer, useCallback } from 'react';
import fakeFetch from '../../lib/helpers/core/fakeFetch';
import searchReducer from '../../stores/reducers/searchReducer';

const initialState = {
  query: '',
  results: [],
  isLoading: false,
  isError: false
};

/* 
* useSearch custom hook mantains state and returns results on *query* string changes, 
* no need for button thanks to a 500ms debounce
*
* Arguments:
* options {object} - limit of how many results to retrieve
*
* Returns:
* query {string} - query that is used for fetching related results
* setQuery {function} - callback function that dispatches the *UPDATE_QUERY* action with new value
* results {array} - results fetched based on the query
* isLoading {boolean} - fetching results is in progress
* isError {boolean} - error fetching results
*/
const useSearch = ({ limit = 5 }) => {
  const [{ query, results, isLoading, isError }, dispatch] = useReducer(searchReducer, initialState);
 
  useEffect(() => {
    /* 
    * Handles Request for Search Results using the useReducer hook to mantain state
    * Only called 500ms after the user has finished typing
    */
    const fetchSearchResults = async () => {
      // Handle empty query state
      if(!query.length) {
        dispatch({ type: 'REMOVE_RESULTS' });
        return;
      };

      // initiate fetch -> trigger loading state
      dispatch({ type: 'FETCH_INIT' });

      /* 
      * Use fakeFetch to return results
      * Query {string} - string that is searched
      * Limit {number} - limits the number of results returned
      */
      const response = await fakeFetch(`https://notarealurlihope.io/api/?query=${query}&limit=${limit}`);
      if (!response.ok) {
        // Fetch Failed -> return failure state to the app
        dispatch({ type: 'FETCH_FAILURE' });
      } else {
        let fetchedResults = response.json();
        // Fetch Success -> return success state with the results
        dispatch({ type: 'FETCH_SUCCESS', payload: fetchedResults });
      }
    }

    // Debounce the users *query* input
    const timeoutID = setTimeout(() => fetchSearchResults(), 500);

    // Clear Timeout on query changes also called after component is cleaned up
    return () => clearTimeout(timeoutID);
  }, [query]);

  // callback that dispatches the *UPDATE_QUERY* action
  const setQuery = useCallback((value) => dispatch({ type: 'UPDATE_QUERY', payload: value }));

  return [query, setQuery, results, isLoading, isError];
}

export default useSearch;
