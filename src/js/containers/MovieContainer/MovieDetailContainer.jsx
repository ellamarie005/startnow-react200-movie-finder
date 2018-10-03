import React from "react";
import { getTitle } from "../searchActions";
import styled from 'styled-components';

class MovieDetailContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      dispatch,
      match: {
        params: { id }
      }
    } = this.props;
    dispatch(getTitle(id));
  }

  render() {
    const { movieInfo, data } = this.props;
    console.log(movieInfo);
    return (
      <Details className="container">
        <a href={"#/"} className="btn">
          Go Back
        </a>
        <br />
        <div className="card">
          <div className="card-body row">
            <div className="col-md-4">
              <img
                className="card-img-top"
                src={movieInfo.Poster}
                alt="testing"
                height="100%"
                width="100%"
              />
            </div>
            <div className="card body col-md border-0">
              <h4>Movie Details</h4>
              <hr />
              <h5>{movieInfo.Title}</h5>
              <p>
                {movieInfo.Released} | {movieInfo.Runtime} | {movieInfo.Rated}
              </p>
              <p>{movieInfo.Plot}</p>
              <p>Metascore: {movieInfo.Metascore}</p>
              <p>IMDB: {movieInfo.imdbRating}</p>
            </div>
          </div>
        </div>
      </Details>
    );
  }
}

const Details = styled.div`
a {
  margin: 20px;
  text-align: center;
  position: absolute;
    right: 40px;
    top: 260px;
}
`

export default MovieDetailContainer;
