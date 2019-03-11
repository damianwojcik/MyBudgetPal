import React from 'react';

import classes from './Entry.module.css';

const Entry = props => {
    return (
        <li className={classes.Entry}>
            <i>{props.icon}</i>
            <span className={classes.title}>{props.title}</span>
            <small>{props.created}</small>
            <span className={classes.price}>{props.price}</span>
            <button onClick={() => props.clicked(props.id)}>&times;</button>
        </li>
    );
};

export default Entry;
