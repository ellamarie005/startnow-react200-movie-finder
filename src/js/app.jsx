import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';

import MovieSearchContainer from './containers/SearchInput/MovieSearchContainer';
import MovieDetailContainer from './containers/MovieContainer/MovieDetailContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'> 
        <div className='jumbotron'>
        <h1>Hello World!</h1>
        <h4>Now let's try and find you that movie!</h4>
        </div>
          <Route exact path='/' component={ MovieSearchContainer } />
          <Route path='/movie/:id' component={ MovieDetailContainer } />
        </div>
      </Router>
    )
  }
}

export default App;