import React from "react";
import axios from "axios";
import { updateSearchInput, getMovie, getTitle, getShortPlot} from "../searchActions";

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
      dispatch(getMovie(name)) && dispatch(getTitle(this.props.match.params.id)) && dispatch(getShortPlot(name));
    }
  }

  render() {
    const { name, data, shortPlot } = this.props;
    console.log(shortPlot);
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
              <div className="card" key={info.imdbID}>
                <div className="row card-body">
                  <div className="col-md-4">
                    <img
                      className="card-img-top"
                      src={info.Poster}
                      alt="testing"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div className="col-md">
                    <h3>{info.Title}</h3>
                    <h6>{info.Year}</h6>
                    <hr />
                    <div>PLOT</div>
                    <div className="d-flex justify-content-end align-self-baseline">
                      <a
                        className="btn btn-primary"
                        href={`#/movie/${info.imdbID}`}
                      >
                        More Information
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
