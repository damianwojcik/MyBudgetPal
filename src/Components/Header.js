import React from 'react';
import classes from './Header.module.css';

const Header = ( props ) => {
    return (
        <div className={classes.Header}>
            <div>
                <button>&lt;</button>
                <button>{props.month}</button>
                <button>&gt;</button>
            </div>
            <a href="/add" className={classes.add}>+</a>
        </div>
    )
}

export default Header;