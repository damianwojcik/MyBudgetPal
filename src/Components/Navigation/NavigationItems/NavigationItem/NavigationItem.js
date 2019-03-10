import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.module.css';

const NavigationItem = props => (
    <div className={classes.NavigationItem}>
        <NavLink
            exact
            to={props.link}
            activeStyle={{
                color: '#152975'
            }}
        >
            {props.children}
        </NavLink>
    </div>
);

export default NavigationItem;
