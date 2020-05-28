import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchMovies from './SearchMovies'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'World updated'
    };
  }

  render() {
    return (
      <div class="container">
        <h1 class="title">React Movie Search</h1>
        <SearchMovies />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
