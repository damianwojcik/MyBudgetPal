import React, { Component } from 'react';

import Header from '../components/Header';
import Status from '../components/Status';
import Diary from '../containers/Diary/Diary';
import NavigationItems from '../components/Navigation/NavigationItems/NavigationItems';

class Dashboard extends Component {
    state = {
        month: 'January'
    };
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
