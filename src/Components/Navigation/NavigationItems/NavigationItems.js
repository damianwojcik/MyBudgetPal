import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
    return (
        <div className={classes.NavigationItems}>
            <NavigationItem link="/" exact>
                Home
            </NavigationItem>
            <NavigationItem link="/diary">Diary</NavigationItem>
            <NavigationItem link="/stats">Stats</NavigationItem>
            <NavigationItem link="/more">More</NavigationItem>
        </div>
    );
};

export default NavigationItems;
