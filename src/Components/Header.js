import React from 'react';
import classes from './Header.module.css';

const Header = props => {
    const setCurrentMonth = () => {
        const today = new Date();
        return today.toLocaleString('en-us', { month: 'long' });
    };

    return (
        <div className={classes.Header}>
            <div>
                <button>&lt;</button>
                <button>{setCurrentMonth()}</button>
                <button>&gt;</button>
            </div>
            <a href="/add" className={classes.add}>
                +
            </a>
        </div>
    );
};

export default Header;
