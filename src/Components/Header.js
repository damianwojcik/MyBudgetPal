import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.css';

const Header = props => {
    const today = new Date();
    const currentMonth = today.toLocaleString('en-us', { month: 'long' });

    return (
        <div className={classes.Header}>
            <Link to="/logout" className={classes.logout}>
                Logout
            </Link>
            <div>
                <button>&lt;</button>
                <button>{currentMonth}</button>
                <button>&gt;</button>
            </div>
            <Link to="/add" className={classes.add}>
                +
            </Link>
        </div>
    );
};

export default Header;
