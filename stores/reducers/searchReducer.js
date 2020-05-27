// Implemention of a simple Reducer to maintain state
const searchReducer = (state, { type, payload }) => {
  switch (type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        results: payload
      }
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    case 'UPDATE_QUERY':
      return {
        ...state,
        query: payload
      }
    case 'REMOVE_RESULTS':
      return {
        ...state,
        results: []
      }
    default:
      throw new Error();
  }
};

export default searchReducer;
