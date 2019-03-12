import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/add" className={classes.add}>
                +
            </Link>
        </div>
    );
};

export default Header;
