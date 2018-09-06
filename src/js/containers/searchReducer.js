const defaultState = {
  name: "",
  data: [],
  movieInfo: [],
  shortPlot: []
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
    case "GET_SHORT_PLOT_FULFILLED": {
      return {
        ...state,
        shortPlot: payload.data
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
