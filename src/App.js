import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard';
import Stats from './containers/Stats';
import Auth from './containers/Auth/Auth';
import EntryAdd from './containers/Entry/EntryAdd/EntryAdd';

class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/add" component={EntryAdd} />
                    <Route path="/stats" component={Stats} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/" component={Auth} />
                </Switch>
            </div>
        );
    }
}

export default App;
