import React, { Component } from 'react';
import Header from '../Components/Header';
import Status from '../Components/Status';
import Diary from '../Components/Diary';
import BottomBar from '../Components/BottomBar/BottomBar';

class Dashboard extends Component {
    state = {
        month: 'January',
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
    deleteEntryHandler(index) {
        const entryIndex = this.state.data.findIndex(entry => {
          return entry.id === index;
        });
        const data = [...this.state.data];
        data.splice(entryIndex, 1);
        this.setState({ data: data });
    }
    render() {
        return (
            <>
                <Header month={this.state.month} />
                <Status data={this.state.data} />
                <Diary
                    data={this.state.data}
                    click={this.deleteEntryHandler.bind(this)} />
                <BottomBar />
            </>
        );
    }
}

export default Dashboard;