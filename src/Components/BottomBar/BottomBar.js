import React from 'react';
import classes from './BottomBar.module.css';
import BottomBarItem from './BottomBarItem/BottomBarItem';

const BottomBar = ( props ) => {
    return (
        <div className={classes.BottomBar}>
            <BottomBarItem link="/" active>Home</BottomBarItem>
            <BottomBarItem link="/diary">Diary</BottomBarItem>
            <BottomBarItem link="/stats">Stats</BottomBarItem>
            <BottomBarItem link="/more">More</BottomBarItem>
        </div>
    )
}

export default BottomBar;