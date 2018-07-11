import React from 'react';
import { updateInput } from './searchActions';

class MovieSearchContainer extends React.Component {
  constructor(props) {
    super(props);

    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    const { dispatch } = this.props;
    const { value } = event.target;
    dispatch(updateInput(value));
  }

  handleClick() {
    const { movieName, dispatch } = this.props;

  }
  render() {
    const { movieName } = this.props;
    return (
      <div className='input-group mb-3'>
        <input
          type='text'
          lassName='form-control'
          placeholder='What is the movie?'
          value={movieName}
          onClick={this.updateInput}
        />
        <div className='input-group-append'>
          <button className='btn btn-outline-secondary'>Go!</button>
        </div>
      </div>
    )
  }
}

export default MovieSearchContainer;