import React, { Component } from 'react';

import Header from '../components/Header';
import Status from '../components/Status';
import Diary from '../containers/Diary/Diary';
import NavigationItems from '../components/Navigation/NavigationItems/NavigationItems';

class Dashboard extends Component {
    state = {
        month: 'January'
    };
    // deleteEntryHandler(index) {
    //     const entryIndex = this.state.data.findIndex(entry => {
    //         return entry.id === index;
    //     });
    //     const data = [...this.state.data];
    //     data.splice(entryIndex, 1);
    //     this.setState({ data: data });
    // }
    render() {
        return (
            <>
                <Header month={this.state.month} />
                {/* <Status data={this.props.entries} /> */}
                <Diary />
                <NavigationItems />
            </>
        );
    }
}

export default Dashboard;
