import React from 'react';
import './Diary.scss';
import Entry from './Entry';

const Diary = (props) => {
    return (
        <div className="diary">
            <div className="diary__wrap">
                <h5 className="diary__heading">Today</h5>
                    <ul className="diary__list">
                        {props.data.map((entry) => {
                            return (
                                <Entry
                                    key={entry.id}
                                    created={entry.created}
                                    icon={entry.type}
                                    title={entry.title}
                                    price={entry.price}
                                    click={() => props.click(entry.id)}
                                />
                            )
                        })}
                </ul>
            </div>
        </div>
    )
}

export default Diary;