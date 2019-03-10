import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import Stats from './containers/Stats';
import Auth from './containers/Auth/Auth';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/stats" component={Stats} />
                    <Route path="/auth" component={Auth} />
                    <Route path="/" exact component={Dashboard} />
                </Switch>
            </div>
        );
    }
}

export default App;
