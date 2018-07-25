import axios from "axios";

export function updateSearchInput(name) {
  return {
    type: "UPDATE_SEARCH_INPUT",
    payload: name
  };
}

export function getMovie(name) {
  return {
    type: "GET_MOVIE",
    payload: axios.get(`http://www.omdbapi.com/?apikey=a227c0d3&s=${name}`)
  };
}

export function getTitle(id) {
  return {
    type: "GET_TITLE",
    payload: axios.get(
      `http://www.omdbapi.com/?apikey=a227c0d3&i=${id}&plot=full`
    )
  };
}
