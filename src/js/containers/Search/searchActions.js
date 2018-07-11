export function updateInput(movieName) {
  return {
    type: 'UPDATE_INPUT',
    payload: movieName
  };
}

export function getMovie(movieName) {
  return {
    type: 'GET_MOVIE',
    payload: axios.get(`http://www.omdbapi.com/?apikey=a227c0d3&s=${movieName}`)
    .then(res => {console.log(res.data)})
  }
}