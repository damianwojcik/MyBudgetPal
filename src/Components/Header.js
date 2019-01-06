import React from 'react';
import './Header.scss';

const Header = (props) => {
    return (
        <div className="header">
            <div className="nav">
                <div className="wrap">
                    <button>&lt;</button>
                    <button>{props.month}</button>
                    <button>&gt;</button>
                </div>
                <button className="add">+</button>
            </div>
        </div>
    )
}

export default Header;