import React from 'react';
import './Diary.scss';
import Entry from './Entry';

const Diary = (props) => {
    return (
        <div className="diary">
            <div className="diary__wrap">
                <h5 className="diary__heading">Today</h5>
                <ul className="diary__list">
                    <Entry
                        icon="grocery"
                        title="Biedronka"
                        price="-38.15"
                    />
                    <Entry
                        icon="salary"
                        title="Wypłata"
                        price="4400.15"
                    />
                </ul>
            </div>
            <div className="diary__wrap">
                <h5 className="diary__heading">Yesterday</h5>
                <ul className="diary__list">
                    <Entry
                        icon="grocery"
                        title="Zakupy lidl"
                        price="-118.15"
                    />
                    <Entry
                        icon="cosmetics"
                        title="Kosmetyki"
                        price="-38.15"
                    />
                </ul>
            </div>
            <div className="diary__wrap">
                <h5 className="diary__heading">11/09/2018</h5>
                <ul className="diary__list">
                    <Entry
                        icon="grocery"
                        title="Zakupy lidl"
                        price="-118.15"
                    />
                    <Entry
                        icon="grocery"
                        title="Zakupy lidl"
                        price="-118.15"
                    />
                    <Entry
                        icon="cosmetics"
                        title="Kosmetyki"
                        price="-38.15"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Diary;