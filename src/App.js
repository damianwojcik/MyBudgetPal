import React, { Component } from 'react';
import Dashboard from './containers/Dashboard';
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Dashboard />
      </div>
    );
  }
}

export default App;
