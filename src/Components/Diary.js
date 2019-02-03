import React from 'react';
import Entry from './Entry';
import classes from './Diary.module.css';

const Diary = ( props ) => {
    return (
        <div className={classes.Diary}>
            <div>
                <h5>Today</h5>
                    <ul>
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