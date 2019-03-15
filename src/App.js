import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';

const asyncDashboard = asyncComponent(() => {
    return import('./containers/Dashboard');
});

const asyncEntryAdd = asyncComponent(() => {
    return import('./containers/Entry/EntryAdd/EntryAdd');
});

const asyncAuth = asyncComponent(() => {
    return import('./containers/Auth/Auth');
});

class App extends Component {
    componentDidMount = () => {
        this.props.onTryAutoSignUp();
    };

    render() {
        let routes = (
            <Switch>
                <Route path="/" component={asyncAuth} />
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/add" component={asyncEntryAdd} />
                    {/* <Route path="/stats" component={Stats} /> */}
                    <Route path="/dashboard" component={asyncDashboard} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/" component={asyncDashboard} />
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
