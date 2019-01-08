import React, { Component } from 'react';
import './App.scss';
import Header from './Components/Header';
import Status from './Components/Status';
import BottomBar from './Components/BottomBar';
import Diary from './Components/Diary';

class App extends Component {
  state = {
    month: 'January',
    status: {
      incomes: 0,
      expenses: 0,
    },
    data: [
      {
          id: 1,
          created: "2019-01-05T04:33:35Z",
          type: 'grocery',
          title: 'biedronka',
          price: -38.15
      },
      {
          id: 2,
          created: "2019-01-05T04:33:35Z",
          type: 'salary',
          title: 'wypłata',
          price: 4400
      },
      {
          id: 3,
          created: "2019-01-05T04:33:35Z",
          type: 'house',
          title: 'Ikea biurko',
          price: -200
      },
      {
          id: 4,
          created: "2019-01-06T04:33:35Z",
          type: 'grocery',
          title: 'lidl zakupy',
          price: -51.23
      },
      {
          id: 5,
          created: "2019-01-02T04:33:35Z",
          type: 'grocery',
          title: 'piekania',
          price: -6.21
      }
    ],
  }
  componentDidMount() {
    this.calculateStatus();
  }
  calculateStatus() {
    const data = [...this.state.data];
    let status = {
      incomes: 0,
      expenses: 0
    };

    let costs = data.filter((item) => item.price < 0);
    let profits = data.filter((item) => item.price > 0);
    costs.forEach(item => {
      status.expenses += item.price;
    })
    profits.forEach(item => {
      status.incomes += item.price;
    })
    status.incomes = status.incomes.toFixed(2);
    status.expenses = status.expenses.toFixed(2);
    this.setState({ status: status })
  }
  deleteEntryHandler(index) {
    const entryIndex = this.state.data.findIndex(entry => {
      return entry.id === index;
    });
    const data = [...this.state.data];
    data.splice(entryIndex, 1);
    this.setState({ data: data }, () => this.calculateStatus());
  }
  render() {
    return (
      <div className="App">
        <Header month={this.state.month} />
        <Status status={this.state.status} />
        <Diary data={this.state.data} click={this.deleteEntryHandler.bind(this)} />
        <BottomBar />
      </div>
    );
  }
}

export default App;
