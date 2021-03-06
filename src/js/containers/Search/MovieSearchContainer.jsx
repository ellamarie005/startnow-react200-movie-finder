import React from "react";
import axios from "axios";
import styled from 'styled-components';
import { updateSearchInput, getMovie, getTitle, getShortPlot } from "../searchActions";

export default class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.updateSearchInput = this.updateSearchInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateSearchInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateSearchInput(value));
  }

  handleClick(event) {
    event.preventDefault();
    const { name, dispatch } = this.props;
    if (name == "") {
      return alert("Fill out input!");
    } else {
      dispatch(getMovie(name));
      dispatch(getTitle(this.props.match.params.id)) && dispatch(getShortPlot(name));
    }
  }

  render() {
    const { name, data, shortPlot } = this.props;
    return (
      <div>
        <form>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="What is the movie?"
              value={name}
              onChange={this.updateSearchInput}
              required
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                onClick={this.handleClick}
              >
                Go!
              </button>
            </div>
          </div>
        </form>
        <div>
          {data.map(info => {
            return (
              <Movie className="card col-md-3" key={info.imdbID}>
                <div className="card-body" id='info'>
                  <img
                    className="card-img-top"
                    src={info.Poster}
                    alt="testing"
                  />
                  <h5>{info.Title} | {info.Year}</h5>
                  <a
                    className="btn"
                    href={`#/movie/${info.imdbID}`}
                  >
                    More Information
                      </a>
                </div>
              </Movie>
            );
          })}
        </div>
      </div>
    );
  }
}

const Movie = styled.div`
  display: inline-block;
  text-align: center;
  margin: auto;
  padding: auto;
  justify-content: center;
  border: solid;
  border-color: #020323;
  border-width: 5px;

img {
  width: 200px;
  height: 300px;
}
a {
  background-color: #020323;
  color: white;
}
`
