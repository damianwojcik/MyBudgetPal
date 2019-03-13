import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './containers/Dashboard';
import Stats from './containers/Stats';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import EntryAdd from './containers/Entry/EntryAdd/EntryAdd';
import * as actions from './store/actions/index';

class App extends Component {
    componentDidMount = () => {
        this.props.onTryAutoSignUp();
    };

    render() {
        let routes = (
            <Switch>
                <Route path="/" component={Auth} />
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/add" component={EntryAdd} />
                    <Route path="/stats" component={Stats} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/" component={Dashboard} />
                </Switch>
            );
        }

        return <div>{routes}</div>;
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignUp: () => dispatch(actions.authCheckState())
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
);
