import React, { Component } from 'react';

import Header from '../components/Header';
import Status from '../components/Status';
import Diary from '../containers/Diary/Diary';
import NavigationItems from '../components/Navigation/NavigationItems/NavigationItems';

const Dashboard = props => {
    return (
        <>
            <Header />
            {/* <Status data={this.props.entries} /> */}
            <Diary />
            <NavigationItems />
        </>
    );
};

export default Dashboard;
