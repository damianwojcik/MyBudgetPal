import React from 'react';

import Header from '../components/Header';

import PageContent from '../components/PageContent';
import NavigationItems from '../components/Navigation/NavigationItems/NavigationItems';

const Dashboard = props => {
  return (
    <React.Fragment>
      <Header />
      {/* <Status data={this.props.entries} /> */}
      <PageContent />
      <NavigationItems />
    </React.Fragment>
  );
};

export default Dashboard;
