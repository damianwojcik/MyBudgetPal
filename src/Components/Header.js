import React from 'react';
import classes from './Header.module.css';

const Header = ( props ) => {
    return (
        <div className={classes.wrapper}>
            <div>
                <button className={classes.btn}>&lt;</button>
                <button className={classes.btn}>{props.month}</button>
                <button className={classes.btn}>&gt;</button>
            </div>
            <button className={[classes.btn, classes.add].join(' ')}>+</button>
        </div>
    )
}

export default Header;