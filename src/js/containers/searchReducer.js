const defaultState = {
  name: "",
  data: [],
  movieInfo: []
};

export default function SearchReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case "UPDATE_SEARCH_INPUT": {
      return {
        ...state,
        name: payload
      };
    }

    case "GET_MOVIE_FULFILLED": {
      return {
        ...state,
        data: payload.data.Search
      };
    }

    case "GET_TITLE_FULFILLED": {
      return {
        ...state,
        movieInfo: payload.data
      };
    }
    default: {
      return state;
    }
  }
}
