import React from 'react';
import './Entry.scss';

const clickHandler = () => {
    alert('TODO')
}

const Entry = (props) => {
    return (
        <li className="entry">
            <i className="entry__icon">{props.icon}</i>
            <span className="entry__title">{props.title}</span>
            <small>{props.created}</small>
            <span className="entry__price">{props.price}</span>
            <button className="entry__deleteBtn" onClick={() => clickHandler()}>&times;</button>
        </li>
    )
}

export default Entry;