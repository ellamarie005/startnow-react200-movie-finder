const defaultState = {
  movieName: '',
  data: {}
}

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_INPUT': {
      return {
        ...state,
        movieName: payload
      }
    }
    
    case 'GET_MOVIE_FULFILLED': {
      return {
        ...state,
        data: payload.data
      }
    }
    default: {
      return state;
    }
  }
}