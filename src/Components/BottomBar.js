import React from 'react';
import classes from './BottomBar.module.css';

const BottomBar = ( props ) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.col}>
                <a className={classes.link} href="/">Home</a>
            </div>
            <div className={classes.col} >
                <a className={classes.link} href="/">Diary</a>
            </div>
            <div className={classes.col}>
                <a className={classes.link} href="/">Stats</a>
            </div>
            <div className={classes.col}>
                <a className={classes.link} href="/">More</a>
            </div>
        </div>
    )
}

export default BottomBar;