import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';

import MovieSearchContainer from "./containers/Search";
import MovieDetailContainer from "./containers/MovieContainer";
class App extends Component {
  render() {
    return (
      <Router>
        <Area className="container-fluid">
          <div className="jumbotron">
            <h1>Hello World!</h1>
            <h4>Now let's try and find you that movie!</h4>
          </div>
          <Route exact path="/" component={MovieSearchContainer} />
          <Route path="/movie/:id" component={MovieDetailContainer} />
        </Area>
      </Router>
    );
  }
}

const Area = styled.div`
padding: 50px;
.jumbotron{
  background: url('https://i.imgur.com/9EjgIg6.jpg');
  color: white;
}
`
export default App;
