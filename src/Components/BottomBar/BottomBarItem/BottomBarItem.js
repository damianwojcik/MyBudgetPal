import React from 'react';
import classes from './BottomBarItem.module.css';

const BottomBarItem = (props) => (
    <div className={classes.BottomBarItem}>
        <a
            href={props.link}
            className={props.active ? classes.active : null}
        >{props.children}</a>
    </div>
);

export default BottomBarItem;