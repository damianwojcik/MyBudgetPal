import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './containers/Dashboard';
import Stats from './containers/Stats';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact render={() => <Dashboard />} />
          <Route path="/stats" exact render={() => <Stats />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
