import React, { Component } from 'react';
import './App.scss';
import Header from './Components/Header';
import Status from './Components/Status';
import BottomBar from './Components/BottomBar';
import Diary from './Components/Diary';

class App extends Component {
  state = {
    month: 'January',
    incomes: 642.32,
    expenses: 231.51,
  }
  render() {
    return (
      <div className="App">
        <Header month={this.state.month} />
        <Status {...this.state} />
        <Diary />
        <BottomBar />
      </div>
    );
  }
}

export default App;
