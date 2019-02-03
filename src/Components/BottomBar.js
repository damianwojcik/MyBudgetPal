import React from 'react';
import classes from './BottomBar.module.css';

const BottomBar = ( props ) => {
    return (
        <div className={classes.BottomBar}>
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                <a href="/diary">Diary</a>
            </div>
            <div>
                <a href="/stats">Stats</a>
            </div>
            <div>
                <a href="/more">More</a>
            </div>
        </div>
    )
}

export default BottomBar;