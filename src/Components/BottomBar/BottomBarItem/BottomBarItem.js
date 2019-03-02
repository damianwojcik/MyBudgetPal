import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './BottomBarItem.module.css';

const BottomBarItem = (props) => (
    <div className={classes.BottomBarItem}>
        <NavLink
            exact
            to={props.link}
            activeStyle={{
                color: '#152975'
            }}
        >{props.children}</NavLink>
    </div>
);

export default BottomBarItem;