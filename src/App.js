import React, { useEffect, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Logout from './containers/Auth/Logout/Logout';
import Spinner from './components/UI/Spinner/Spinner';
import * as actions from './store/actions/index';

const Dashboard = React.lazy(() => {
  return import('./containers/Dashboard');
});

const EntryAdd = React.lazy(() => {
  return import('./containers/Entry/EntryAdd/EntryAdd');
});

const Auth = React.lazy(() => {
  return import('./containers/Auth/Auth');
});

const App = props => {
  useEffect(() => {
    props.onTryAutoSignUp();
  }, []);

  let routes = (
    <Switch>
      <Route path="/" render={() => <Auth {...props} />} />
    </Switch>
  );

  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/add" render={() => <EntryAdd {...props} />} />
        {/* <Route path="/stats" component={Stats} /> */}
        <Route path="/dashboard" render={() => <Dashboard {...props} />} />
        <Route path="/logout" component={Logout} />
        <Route path="/" render={() => <Dashboard {...props} />} />
      </Switch>
    );
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <Suspense fallback={<Spinner />}>{routes}</Suspense>
    </div>
  );
};

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
