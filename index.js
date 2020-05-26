import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
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
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
