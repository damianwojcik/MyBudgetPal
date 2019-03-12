import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Status from '../components/Status';
import Diary from '../containers/Diary/Diary';
import NavigationItems from '../components/Navigation/NavigationItems/NavigationItems';

class Dashboard extends Component {
    render() {
        let authRedirect = null;

        if (!this.props.isAuthenticated) {
            authRedirect = <Redirect to="/" />;
        }

        return (
            <>
                {authRedirect}
                <Header />
                {/* <Status data={this.props.entries} /> */}
                <Diary />
                <NavigationItems />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Dashboard);
