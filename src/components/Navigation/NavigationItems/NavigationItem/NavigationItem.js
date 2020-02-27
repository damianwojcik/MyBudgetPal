import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const NavigationItem = ({ link, children }) => (
  <div className={classes.NavigationItem}>
    <NavLink
      exact
      to={link}
      activeStyle={{
        color: '#152975'
      }}
    >
      {children}
    </NavLink>
  </div>
);

export default NavigationItem;
