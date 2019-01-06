import React from 'react';
import './BottomBar.scss';

const BottomBar = (props) => {
    return (
        <div className="bottombar">
            <div className="bottombar__col">
                <a className="bottombar__link" href="/">Home</a>
            </div>
            <div className="bottombar__col">
                <a className="bottombar__link active" href="/">Diary</a>
            </div>
            <div className="bottombar__col">
                <a className="bottombar__link" href="/">Stats</a>
            </div>
            <div className="bottombar__col">
                <a className="bottombar__link" href="/">More</a>
            </div>
        </div>
    )
}

export default BottomBar;