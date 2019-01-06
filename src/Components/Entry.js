import React from 'react';
import './Entry.scss';

const Entry = (props) => {
    return (
        <li className="entry">
            <i className="entry__icon">{props.icon}</i>
            <span className="entry__title">{props.title}</span>
            <span className="entry__price">{props.price}</span>
        </li>
    )
}

export default Entry;