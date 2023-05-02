export const FETCH_RANDOM_GREETING_REQUEST = 'FETCH_RANDOM_GREETING_REQUEST';
export const FETCH_RANDOM_GREETING_SUCCESS = 'FETCH_RANDOM_GREETING_SUCCESS';
export const FETCH_RANDOM_GREETING_FAILURE = 'FETCH_RANDOM_GREETING_FAILURE';

export const fetchRandomGreeting = () => {
  return dispatch => {
    dispatch({ type: FETCH_RANDOM_GREETING_REQUEST });

    return fetch('/api/greetings')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: FETCH_RANDOM_GREETING_SUCCESS,
          payload: data.message
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_RANDOM_GREETING_FAILURE,
          payload: error.message
        });
      });
  };
};
